import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
import { UI } from "./ui";
import control from "@resource/control.json";
import config from "@resource/config.json";
export namespace Animation
{
    const canvas = UI.getElementById("div", "canvas");
    export let pattern: typeof control.pattern.enum[number];
    let newSpan: number;
    export const updateSpan = (value: number) =>
    {
        newSpan = value;
        if (span !== newSpan)
        {
            if ( ! Animation.isIn())
            {
                offsetAt = offsetAt *(newSpan /span);
                span = newSpan;
            }
        }
    };
    export const startStep = (now: number) =>
        startAt = now -offsetAt;
    export const pauseStep = (now: number) =>
        offsetAt = now -startAt;
    export const adjustSpan = (now: number) =>
    {
        if (span !== newSpan)
        {
            const universalStep = (now -startAt) /span;
            startAt = now -(universalStep *newSpan);
            span = newSpan;
        }
    };
    interface Layer
    {
        layer: HTMLDivElement;
        mile: number;
        offset: number;
        arguments: FlounderStyle.Type.Arguments | undefined;}
    let layers: Layer[] = [];
    const getDiagonalSize = () => Math.sqrt(Math.pow(canvas.clientWidth ?? 0, 2) +Math.pow(canvas.clientHeight ?? 0, 2));
    let diagonalSize = getDiagonalSize();
    export const updateDiagonalSize = () =>
    {
        const newDiagonalSize = getDiagonalSize();
        const fixRate = newDiagonalSize /diagonalSize;
        layers.forEach
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
        argumentHistory.forEach
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
        diagonalSize = newDiagonalSize;
        update();
    };
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
    const getPatterns = (): ((intervalSize: IntervalSize) => FlounderStyle.Type.Arguments)[] =>
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
    const argumentHistory: FlounderStyle.Type.Arguments[] = [];
    const makeRandomArguments = (): FlounderStyle.Type.Arguments =>
    {
        const result = randomSelect(getPatterns())
        (
            rate
            (
                diagonalSize *config.intervalSize.minRate,
                diagonalSize *config.intervalSize.maxRate
            )
            (Math.random())
        );
        argumentHistory.push(result);
        if (3 <= argumentHistory.length)
        {
            argumentHistory.shift();
        }
        return result;
    };
    let startAt = 0;
    let offsetAt = 0;
    let span = control.span.default;
    let h = Math.random();
    let hueUnit = 1 / phiColors.phi;
    let defaultLightness = 0.5;
    let hsl =
    {
        h:rate(phiColors.HslHMin, phiColors.HslHMax)(h),
        s:rate(phiColors.HslSMin, phiColors.HslSMax)(0.8),
        l:rate(phiColors.HslLMin, phiColors.HslLMax)(defaultLightness),
    };
    export const makeColor = (step: number, lightness?: number) =>
        <FlounderStyle.Type.HexColor>phiColors.rgbForStyle
        (
            phiColors.clipRgb
            (
                phiColors.hslToRgb
                ({
                    h: rate(phiColors.HslHMin, phiColors.HslHMax)((h +(hueUnit *step)) %1),
                    s: hsl.s,
                    l: rate(phiColors.HslLMin, phiColors.HslLMax)(lightness ?? defaultLightness),
                })
            )
        );
    let easing: (t: number) => number;
    let getForegroundColor: (i: Layer, ix: number) => FlounderStyle.Type.Color;
    const getBackgroundColor = (i: Layer, ix: number): FlounderStyle.Type.Color =>
    {
        if (i.arguments)
        {
            return i.arguments.foregroundColor;
        }
        else
        if (0 === ix)
        {
            return makeColor(0.0);
        }
        else
        {
            return "black";
        }
    };
    const getStep = (universalStep: number, layer: Layer) => universalStep -(layer.mile +layer.offset);
    export const updateColoring = (coloring: typeof control.coloring.enum[number]) =>
    {
        switch(coloring)
        {
        case "monochrome":
            getForegroundColor = (i: Layer, _ix: number) =>
                indexSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, i.mile +1.0);
            break;
        case "primary-colors":
            getForegroundColor = (i: Layer, ix: number) =>
                indexSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +i.mile +1.0);
            break;
        case "phi-colors":
        default:
            getForegroundColor = (i: Layer, _ix: number) =>
                <FlounderStyle.Type.Color>makeColor(i.mile +i.offset +1.0, 0.6);
            break;
        }
    };
        
    export const step = (now: number) =>
    {
        const universalStep = (now -startAt) /span;
        layers.forEach
        (
            (i, ix) =>
            {
                let step = getStep(universalStep, i);
                if (0 <= step)
                {
                    if (1.0 <= step || undefined === i.arguments)
                    {
                        while(1.0 <= step)
                        {
                            ++i.mile;
                            step = getStep(universalStep, i);
                        }
                        i.arguments = Object.assign
                        (
                            { },
                            layers[ix -1]?.arguments ?? makeRandomArguments(),
                            {
                                foregroundColor: getForegroundColor(i, ix),
                                backgroundColor: getBackgroundColor(i, ix),
                            }
                        );
                    }
                    i.arguments.depth = easing(step);
                    FlounderStyle.setStyle(i.layer, i.arguments);
                }
            }
        );
    }
    export const update = () =>
    {
        if ( ! isIn())
        {
            step(startAt +offsetAt);
        }
    }
    export const isIn = () => document.body.classList.contains("immersive");
    export const updateLayers = (newLayers: number) =>
    {
        const oldLayerList = UI.getElementsByClassName("div", "layer");
        if (oldLayerList.length < newLayers)
        {
            for (let i = oldLayerList.length; i < newLayers; ++i)
            {
                canvas.appendChild(UI.createElement("div", { attributes: { class: "layer", }, }));
            }
        }
        else
        {
            for (let i = newLayers; i < oldLayerList.length; ++i)
            {
                canvas.removeChild(oldLayerList[i]);
            }
        }
        const layerList = UI.getElementsByClassName("div", "layer");
        const newArguments = layers[0]?.arguments;
        const oldArguments = argumentHistory[argumentHistory.length -2];
        const newMile = layers[0]?.mile ?? 0;
        const oldMile = Math.max(newMile -1, 0);
        const restoreArgument = (i: FlounderStyle.Type.Arguments, ix: number) =>
        {
            if (undefined !== i)
            {
                const layer = <Layer>
                {
                    mile: oldMile,
                    offset: ix /layerList.length,
                };
                i.foregroundColor = getForegroundColor(layer, ix);
                if (0 < oldMile)
                {
                    const oldLayer = <Layer>
                    {
                        mile: oldMile -1,
                        offset: ix /layerList.length,
                    };
                    layer.arguments = <FlounderStyle.Type.Arguments>
                    {
                        foregroundColor: getForegroundColor(oldLayer, ix),
                    };
                }
                i.backgroundColor = getBackgroundColor(layer, ix);
            }
            return i;
        };
        layers = layerList.map
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
        update();
    };
    export const updateEasing = (enabled: boolean) =>
    {
        easing = enabled ?
            (t: number) => t <= 0.5 ?
                2 *Math.pow(t, 2):
                1 -(2 *Math.pow(1 -t, 2)):
            (t: number) => t;
        update();
    };
}