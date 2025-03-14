import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
import { Library } from "@library";
import { Tools } from "@tools";
import control from "@resource/control.json";
import config from "@resource/config.json";
export namespace Animation
{
    namespace Pattern
    {
        export type IntervalSize = Exclude<FlounderStyle.Type.Arguments["intervalSize"], undefined>;
        const makeRandomSpotArguments = (type: FlounderStyle.Type.SpotArguments["type"], intervalSize: IntervalSize): FlounderStyle.Type.SpotArguments =>
        ({
            type,
            layoutAngle: Tools.Random.select([ "regular", "alternative", ]),
            foregroundColor: "forestgreen",
            backgroundColor: "blanchedalmond",
            intervalSize,
            depth: 0.0,
            maxPatternSize: Tools.Random.select([ undefined, intervalSize /4, ]),
            reverseRate: Tools.Random.select([ undefined, 0.0, ]),
            maximumFractionDigits: config.maximumFractionDigits,
        });
        const makeRandomTrispotArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
            makeRandomSpotArguments("trispot", intervalSize);
        const makeRandomTetraspotArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
            makeRandomSpotArguments("tetraspot", intervalSize);
        const makeRandomLineArguments = (type: FlounderStyle.Type.LineArguments["type"], intervalSize: IntervalSize): FlounderStyle.Type.LineArguments =>
        ({
            type,
            layoutAngle: Math.random(),
            foregroundColor: "forestgreen",
            backgroundColor: "blanchedalmond",
            intervalSize,
            depth: 0.0,
            maxPatternSize: Tools.Random.select([ undefined, intervalSize /(2 +Tools.Random.makeInteger(9)), ]),
            reverseRate: Tools.Random.select([ undefined, 0.0, ]),
            anglePerDepth: Tools.Random.select([ undefined, "auto", "-auto", 1,0, -1.0, ]),
            maximumFractionDigits: config.maximumFractionDigits,
        });
        const makeRandomStripeArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
            makeRandomLineArguments("stripe", intervalSize);
        const makeRandomDilineArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
            makeRandomLineArguments("diline", intervalSize);
        const makeRandomTrilineArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
            makeRandomLineArguments("triline", intervalSize);
        const getList = (pattern: typeof control.pattern.enum[number]): ((intervalSize: IntervalSize) => FlounderStyle.Type.Arguments)[] =>
        {
            switch(pattern)
            {
                case "lines":
                    return [
                        makeRandomStripeArguments,
                        makeRandomDilineArguments,
                        makeRandomTrilineArguments,
                    ];
                case "spots":
                    return [
                        makeRandomTrispotArguments,
                        makeRandomTetraspotArguments,
                    ];
                case "multi":
                default:
                    return [
                        makeRandomStripeArguments,
                        makeRandomDilineArguments,
                        makeRandomTrilineArguments,
                        makeRandomTrispotArguments,
                        makeRandomTetraspotArguments,
                    ];
            }
        };
        export const make = (pattern: typeof control.pattern.enum[number], intervalSize: IntervalSize) =>
            Tools.Random.select(getList(pattern))(intervalSize);
    }
    export class PhiColoring
    {
        public static regulateH = (h: number) => Tools.Math.scale(phiColors.HslHMin, phiColors.HslHMax)(h);
        public static regulateS = (s: number) => Tools.Math.scale(phiColors.HslSMin, phiColors.HslSMax)(s);
        public static regulateL = (l: number) => Tools.Math.scale(phiColors.HslLMin, phiColors.HslLMax)(l);
        constructor
        (
            public hue = Math.random(),
            saturation :number = config.colors.phiColors.saturation,
            lightness :number = config.colors.phiColors.lightness,
            public hueUnit = 1 / phiColors.phi
        )
        {
            //this.h = rate(phiColors.HslHMin, phiColors.HslHMax)((hue);
            this.s = PhiColoring.regulateL(saturation);
            this.l = PhiColoring.regulateL(lightness);
        }
        //h: number;
        s: number;
        l: number;
        makeColor = (step: number) =>
            <FlounderStyle.Type.HexColor>phiColors.rgbForStyle
            (
                phiColors.clipRgb
                (
                    phiColors.hslToRgb
                    ({
                        h: PhiColoring.regulateH((this.hue +(this.hueUnit *step)) %1),
                        s: this.s,
                        l: this.l,
                    })
                )
            );
    }
    interface Layer
    {
        layer: HTMLDivElement;
        mile: number;
        offset: number;
        arguments: FlounderStyle.Type.Arguments | undefined;
    }
    export class Animator
    {
        layers: Layer[] = [];
        pattern: typeof control.pattern.enum[number] = control.pattern.default;
        startAt = 0;
        offsetAt = 0;
        cycleSpan = control.cycleSpan.default;
        diagonalSize = 0;
        constructor(public canvas: HTMLDivElement, public phiColoring: PhiColoring = new PhiColoring())
        {
        };
        getDiagonalSize = () => Math.sqrt(Math.pow(this.canvas.clientWidth ?? 0, 2) +Math.pow(this.canvas.clientHeight ?? 0, 2));
        easing: (t: number) => number = t => t;
        argumentHistory: FlounderStyle.Type.Arguments[] = [];
        public startStep = (now: number) =>
            this.startAt = now -this.offsetAt;
        makeRandomArguments = (): FlounderStyle.Type.Arguments =>
        {
            const result = Pattern.make
            (
                this.pattern,
                Tools.Math.scale
                (
                    this.diagonalSize *config.intervalSize.minRate,
                    this.diagonalSize *config.intervalSize.maxRate
                )
                (Math.random())
            );
            this.argumentHistory.push(result);
            if (3 <= this.argumentHistory.length)
            {
                this.argumentHistory.shift();
            }
            return result;
        };
        getNextColorMaker = (coloring: typeof control.coloring.enum[number]) =>
        {
            switch(coloring)
            {
            case "monochrome":
                return (mile: number, _offset: number, _ix: number) =>
                    Tools.Array.cycleSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, mile +1.0);
            case "primary-colors":
                return (mile: number, _offset: number, ix: number) =>
                    Tools.Array.cycleSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +mile +1.0);
            case "phi-colors":
            default:
                return (mile: number, offset: number, _ix: number) =>
                    this.phiColoring.makeColor(mile +offset +1.0);
            }
        };
        getForegroundColor: (mile: number, offset: number, ix: number) => FlounderStyle.Type.Color = this.getNextColorMaker("phi-colors");
        getBackgroundColor = (mile: number, offset: number, ix: number): FlounderStyle.Type.Color =>
        {
            switch(true)
            {
            case 0 < mile:
                return this.getForegroundColor(mile -1, offset, ix);
            case mile <= 0 && ix <= 0:
                return this.phiColoring.makeColor(0.0);
            case mile <= 0 && 0 < ix:
            default:
                return "black";
            }
        };
        getStep = (universalStep: number, layer: Layer) => universalStep -(layer.mile +layer.offset);
        step = (now: number) =>
        {
            this.offsetAt = now -this.startAt;
            const universalStep = this.offsetAt /this.cycleSpan;
            this.layers.forEach
            (
                (i, ix) =>
                {
                    let step = this.getStep(universalStep, i);
                    if (0 <= step)
                    {
                        if (1.0 <= step || undefined === i.arguments)
                        {
                            while(1.0 <= step)
                            {
                                ++i.mile;
                                step = this.getStep(universalStep, i);
                            }
                            i.arguments = Object.assign
                            (
                                { },
                                this.layers[ix -1]?.arguments ?? this.makeRandomArguments(),
                                {
                                    foregroundColor: this.getForegroundColor(i.mile, i.offset, ix),
                                    backgroundColor: i.arguments?.foregroundColor ?? this.getBackgroundColor(i.mile, i.offset, ix),
                                }
                            );
                        }
                        i.arguments.depth = this.easing(step);
                        FlounderStyle.setStyle(i.layer, i.arguments);
                    }
                }
            );
        }
        update = () =>
            this.step(this.startAt +this.offsetAt);
        setPattern = (newPattern: typeof control.pattern.enum[number]) =>
            this.pattern = newPattern;
        setColoring = (coloring: typeof control.coloring.enum[number]) =>
            this.getForegroundColor = this.getNextColorMaker(coloring);
        setDiagonalSize = (newDiagonalSize: number) =>
        {
            const fixRate = newDiagonalSize /this.diagonalSize;
            this.diagonalSize = newDiagonalSize;
            const list = this.layers
                .map(i => i.arguments)
                .concat(this.argumentHistory);
            list.filter(Library.TypeGuards.has("intervalSize")).forEach(i => i.intervalSize *= fixRate);
            list.filter(Library.TypeGuards.has("maxPatternSize")).forEach(i => i.maxPatternSize *= fixRate);
        };
        updateDiagonalSize = () =>
            this.setDiagonalSize(this.getDiagonalSize());
        setCycleSpan = (newCycleSpan: number) =>
        {
            const fixRate = newCycleSpan /this.cycleSpan;
            const now = performance.now();
            this.offsetAt = this.offsetAt *fixRate;
            this.startStep(now);
            this.cycleSpan = newCycleSpan;
        };
        setLayers = (newLayers: number) =>
        {
            const oldLayerList = Library.UI.getElementsByClassName("div", "layer");
            if (oldLayerList.length < newLayers)
            {
                for (let i = oldLayerList.length; i < newLayers; ++i)
                {
                    this.canvas.appendChild(Library.UI.createElement({ tag: "div", attributes: { class: "layer", }, }));
                }
            }
            else
            {
                for (let i = newLayers; i < oldLayerList.length; ++i)
                {
                    this.canvas.removeChild(oldLayerList[i]);
                }
            }
            const layerList = Library.UI.getElementsByClassName("div", "layer");
            const newArguments = this.layers[0]?.arguments;
            const oldArguments = this.argumentHistory[this.argumentHistory.length -2];
            const newMile = this.layers[0]?.mile ?? 0;
            const oldMile = Math.max(newMile -1, 0);
            const restoreArgument = (i: FlounderStyle.Type.Arguments, ix: number) =>
            {
                if (undefined !== i)
                {
                    const result = Object.assign({ }, i);
                    const offset = ix /layerList.length;
                    result.foregroundColor = this.getForegroundColor(oldMile, offset, ix);
                    result.backgroundColor = this.getBackgroundColor(oldMile, offset, ix);
                    return result;
                }
                return undefined;
            };
            this.layers = layerList.map
            (
                (layer, ix) =>
                (
                    <Layer>
                    {
                        layer,
                        mile: 0 === ix ? newMile: oldMile,
                        offset: ix /layerList.length,
                        arguments: 0 === ix ? newArguments: restoreArgument(oldArguments, ix),
                    }
                )
            );
        };
        setEasing = (enabled: boolean) =>
        {
            this.easing = enabled ?
                (t: number) => t <= 0.5 ?
                    2 *Math.pow(t, 2):
                    1 -(2 *Math.pow(1 -t, 2)):
                (t: number) => t;
        };
    }
}