import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
import { UI } from "./ui";
import control from "@resource/control.json";
import config from "@resource/config.json";
export namespace Animation
{
    const rate = (min: number, max: number) => (r: number) => min + ((max -min) *r);
    const makeRandomInteger = (size: number) => Math.floor(Math.random() *size);
    const randomSelect = <T>(list: T[]): T => list[makeRandomInteger(list.length)];
    const indexSelect = <T>(list: T[], ix: number): T => list[ix %list.length];
    type IntervalSize = Exclude<FlounderStyle.Type.Arguments["intervalSize"], undefined>;
    const makeRandomSpotArguments = (type: FlounderStyle.Type.SpotArguments["type"], intervalSize: IntervalSize): FlounderStyle.Type.SpotArguments =>
    ({
        type,
        layoutAngle: randomSelect([ "regular", "alternative", ]),
        foregroundColor: "forestgreen",
        backgroundColor: "blanchedalmond",
        intervalSize,
        depth: 0.0,
        maxPatternSize: randomSelect([ undefined, intervalSize /4, ]),
        reverseRate: randomSelect([ undefined, 0.0, ]),
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
        maxPatternSize: randomSelect([ undefined, intervalSize /(2 +makeRandomInteger(9)), ]),
        reverseRate: randomSelect([ undefined, 0.0, ]),
        anglePerDepth: randomSelect([ undefined, "auto", "-auto", 1,0, -1.0, ]),
        maximumFractionDigits: config.maximumFractionDigits,
    });
    const makeRandomStripeArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
        makeRandomLineArguments("stripe", intervalSize);
    const makeRandomDilineArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
        makeRandomLineArguments("diline", intervalSize);
    const makeRandomTrilineArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
        makeRandomLineArguments("triline", intervalSize);
    interface Layer
    {
        layer: HTMLDivElement;
        mile: number;
        offset: number;
        arguments: FlounderStyle.Type.Arguments | undefined;
    }
    export class PhiColoring
    {
        h = Math.random();
        hueUnit = 1 / phiColors.phi;
        defaultLightness = 0.5;
        hsl =
        {
            h:rate(phiColors.HslHMin, phiColors.HslHMax)(this.h),
            s:rate(phiColors.HslSMin, phiColors.HslSMax)(0.8),
            l:rate(phiColors.HslLMin, phiColors.HslLMax)(this.defaultLightness),
        };
        makeColor = (step: number, lightness?: number) =>
            <FlounderStyle.Type.HexColor>phiColors.rgbForStyle
            (
                phiColors.clipRgb
                (
                    phiColors.hslToRgb
                    ({
                        h: rate(phiColors.HslHMin, phiColors.HslHMax)((this.h +(this.hueUnit *step)) %1),
                        s: this.hsl.s,
                        l: rate(phiColors.HslLMin, phiColors.HslLMax)(lightness ?? this.defaultLightness),
                    })
                )
            );
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
        getPatterns = (): ((intervalSize: IntervalSize) => FlounderStyle.Type.Arguments)[] =>
        {
            switch(this.pattern)
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
        makeRandomArguments = (): FlounderStyle.Type.Arguments =>
        {
            const result = randomSelect(this.getPatterns())
            (
                rate
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
                    indexSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, mile +1.0);
            case "primary-colors":
                return  (mile: number, _offset: number, ix: number) =>
                    indexSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +mile +1.0);
            case "phi-colors":
            default:
                return  (mile: number, offset: number, _ix: number) =>
                    this.phiColoring.makeColor(mile +offset +1.0, 0.6);
            }
        };
        getForegroundColor: (mile: number, offset: number, ix: number) => FlounderStyle.Type.Color = this.getNextColorMaker("phi-colors");
        getBackgroundColor = (mile: number, offset: number, ix: number): FlounderStyle.Type.Color =>
        {
            if (0 < mile)
            {
                return this.getForegroundColor(mile -1, offset, ix);
            }
            else
            if (0 === ix)
            {
                return this.phiColoring.makeColor(0.0);
            }
            else
            {
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
                                    backgroundColor: this.getBackgroundColor(i.mile, i.offset, ix),
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
        updatePattern = (newPattern: typeof control.pattern.enum[number]) =>
            this.pattern = newPattern;
        updateColoring = (coloring: typeof control.coloring.enum[number]) =>
            this.getForegroundColor = this.getNextColorMaker(coloring);
        updateDiagonalSize = () =>
        {
            const newDiagonalSize = this.getDiagonalSize();
            const fixRate = newDiagonalSize /this.diagonalSize;
            this.diagonalSize = newDiagonalSize;
            this.layers.forEach
            (
                i =>
                {
                    if (undefined !== i.arguments?.intervalSize)
                    {
                        i.arguments.intervalSize *= fixRate;
                        if (undefined !== i.arguments.maxPatternSize)
                        {
                            i.arguments.maxPatternSize *= fixRate;
                        }
                    }
                }
            );
            this.argumentHistory.forEach
            (
                i =>
                {
                    if (undefined !== i.intervalSize)
                    {
                        i.intervalSize *= fixRate;
                        if (undefined !== i.maxPatternSize)
                        {
                            i.maxPatternSize *= fixRate;
                        }
                    }
                }
            );
        };
        updateCycleSpan = (newCycleSpan: number) =>
        {
            const fixRate = newCycleSpan /this.cycleSpan;
            const now = performance.now();
            this.offsetAt = this.offsetAt *fixRate;
            this.startStep(now);
            this.cycleSpan = newCycleSpan;
        };
        updateLayers = (newLayers: number) =>
        {
            const oldLayerList = UI.getElementsByClassName("div", "layer");
            if (oldLayerList.length < newLayers)
            {
                for (let i = oldLayerList.length; i < newLayers; ++i)
                {
                    this.canvas.appendChild(UI.createElement({ tag: "div", attributes: { class: "layer", }, }));
                }
            }
            else
            {
                for (let i = newLayers; i < oldLayerList.length; ++i)
                {
                    this.canvas.removeChild(oldLayerList[i]);
                }
            }
            const layerList = UI.getElementsByClassName("div", "layer");
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
        updateEasing = (enabled: boolean) =>
        {
            this.easing = enabled ?
                (t: number) => t <= 0.5 ?
                    2 *Math.pow(t, 2):
                    1 -(2 *Math.pow(1 -t, 2)):
                (t: number) => t;
        };
    }
}