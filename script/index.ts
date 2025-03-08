import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
import { Control } from "./control";
import { UI } from "./ui";
import { Fps } from "./fps";
import { Locale } from "./locale"
import control from "@resource/control.json";
import config from "@resource/config.json";
import poweredBy from "@resource/powered-by.json";
const numberToString = (value: number, maximumFractionDigits?: number) =>
    value.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits, });
const timespanToString = (value: number, maximumFractionDigits?: number) =>
    value < 1000 ? `${numberToString(value, maximumFractionDigits)} ${Locale.map("timeUnitMs")}`:
    value < 60 *1000 ? `${numberToString(value /1000, maximumFractionDigits)} ${Locale.map("timeUnitS")}`:
    value < 60 *60 *1000 ?`${numberToString(value /(60 *1000), maximumFractionDigits)} ${Locale.map("timeUnitM")}`:
    value < 24 *60 *60 *1000 ?`${numberToString(value /(60 *60 *1000), maximumFractionDigits)} ${Locale.map("timeUnitH")}`:
        `${numberToString(value /(24 *60 *60 *1000), maximumFractionDigits)} ${Locale.map("timeUnitD")}`;
const screenBody = UI.getElementById(HTMLDivElement, "screen-body");
const canvas = UI.getElementById(HTMLDivElement, "canvas");
const topCoat = UI.getElementById(HTMLDivElement, "top-coat");
//const playButton =
new Control.Button
({
    id:"play-button",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        playOrPause();
    }
});
const patternSelect = new Control.Select(control.pattern);
const coloringSelect = new Control.Select(control.coloring);
const canvasSizeSelect = new Control.Select
(
    control.canvasSize,
    {
        makeLabel: i => `${i} %`,
        change: () => updateCanvasSize()
    }
);
const layersSelect = new Control.Select
(
    control.layers,
    {
        change: () => updateLayers()
    }
);
const spanSelect = new Control.Select
(
    control.span,
    {
        makeLabel: timespanToString,
        change: () => updateSpan(),
    }
);
const fuseFpsSelect = new Control.Select
(
    control.fuseFps,
    {
        change: () => updateFuseFps(),
    }
);
const easingCheckbox = new Control.Checkbox(control.easing);
const withFullscreen = new Control.Checkbox(control.withFullscreen);
const showFPS = new Control.Checkbox(control.showFPS);
const fpsElement = UI.getElementById(HTMLDivElement, "fps");
const poweredByElement = UI.querySelector(HTMLUListElement, "#powered-by ul");
Object.entries(poweredBy).forEach
(
    i =>
    {
        const li = UI.createElement(HTMLLIElement, "li");
        const a = UI.createElement(HTMLAnchorElement, "a");
        a.innerText = i[0];
        a.href = i[1];
        li.appendChild(a);
        poweredByElement.appendChild(li);
    }
);
const getDiagonalSize = () => Math.sqrt(Math.pow(canvas?.clientWidth ?? 0, 2) +Math.pow(canvas?.clientHeight ?? 0, 2));
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
    switch(patternSelect.get())
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
const fullscreenEnabled = document.fullscreenEnabled || (<any>document).webkitFullscreenEnabled;
if ( ! fullscreenEnabled && withFullscreen.dom.parentElement)
{
    withFullscreen.dom.parentElement.style.setProperty("display", "none");
}
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
const makeColor = (step: number, lightness?: number) =>
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
interface Layer
{
    layer: HTMLDivElement;
    mile: number;
    offset: number;
    arguments: FlounderStyle.Type.Arguments | undefined;}
let layers: Layer[] = [];
UI.getElementsByClassName(HTMLDivElement, "layer")[0].style.setProperty("background-color", makeColor(0.0));
const informationList = UI.getElementById(HTMLUListElement, "information-list");
config.informations.forEach
(
    i =>
    {
        const li = UI.createElement(HTMLLIElement, "li");
        li.innerText = Locale.map(<Locale.KeyType>i);
        informationList.appendChild(li);
    }
);
const getStep = (universalStep: number, layer: Layer) => universalStep -(layer.mile +layer.offset);
const animationStep = (now: number) =>
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
const updateAnimation = () =>
{
    if ( ! isInAnimation())
    {
        animationStep(startAt +offsetAt);
    }
}
const isInAnimation = () => document.body.classList.contains("immersive");
const animation = (now: number) =>
{
    if (isInAnimation())
    {
        Fps.step(now);
        if (Fps.isUnderFuseFps())
        {
            console.error
            (
                "❌ UnderFuseFps:",
                {
                    fuseFps: Fps.fuseFps,
                    maxFps: Fps.currentMaxFps.fps,
                    nowFps: Fps.currentMaxFps.fps,
                    minFps: Fps.currentMinFps.fps,
                }
            );
            pause();
        }
        else
        {
            if (showFPS.get())
            {
                fpsElement.innerText = Fps.getText();
            }
            if (span !== newSpan)
            {
                const universalStep = (now -startAt) /span;
                startAt = now -(universalStep *newSpan);
                span = newSpan;
            }
            animationStep(now);
            window.requestAnimationFrame(animation);
        }
    }
    else
    {
        offsetAt = now -startAt;
    }
};
const updateFullscreenState = (fullscreen?: boolean) =>
{
    if (fullscreenEnabled)
    {
        if (fullscreen ?? withFullscreen.get())
        {
            if (document.body.requestFullscreen)
            {
                document.body.requestFullscreen();
            }
            else
            if ("webkitRequestFullscreen" in document.body)
            {
                (<any>document.body).webkitRequestFullscreen();
            }
        }
        else
        {
            if (document.fullscreenElement || ("webkitFullscreenElement" in document && null !== document.webkitFullscreenElement))
            {
                if (document.exitFullscreen)
                {
                    document.exitFullscreen();
                }
                else
                if ("webkitCancelFullScreen" in document)
                {
                    (<any>document).webkitCancelFullScreen();
                }
            }
        }
    }
};
const play = () =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle("mousemove", false);
    updateFullscreenState();
    updateCanvasSize();
    updateLayers();
    fpsElement.innerText = "";
    setTimeout
    (
        () => window.requestAnimationFrame
        (
            now =>
            {
                startAt = now -offsetAt;
                Fps.reset();
                animation(now);
            }
        ),
        config.startWait
    );
};
const pause = () =>
{
    document.body.classList.toggle("immersive", false);
    //fpsElement.innerText = "";
    updateFullscreenState(false);
};
const playOrPause = () =>
    isInAnimation() ? pause(): play();
topCoat.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        if (event.target === event.currentTarget)
        {
            console.log("👆 topCoat.Click:", event, topCoat);
            pause();
        }
    }
);
const mousemoveTimer = new UI.ToggleClassForWhileTimer();
screenBody.addEventListener
(
    "mousemove",
    _event =>
    {
        if (config.log.mousemove && ! mousemoveTimer.isOn())
        {
            console.log("🖱️ MouseMove:", event, screenBody);
        }
        mousemoveTimer.start(document.body, "mousemove", 1000)
    }
)
UI.querySelectorAllWithFallback(HTMLLabelElement, [ "label[for]:has(select)", "label[for]", ])
    .forEach(label => UI.showPickerOnLabel(label));
const updateColoring = () =>
{
    switch(coloringSelect.get() ?? "phi-colors")
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
updateColoring();
const updateLayers = () =>
{
    const newLayers = parseInt(layersSelect.get());
    const oldLayerList = UI.getElementsByClassName(HTMLDivElement, "layer");
    if (oldLayerList.length < newLayers)
    {
        for (let i = oldLayerList.length; i < newLayers; ++i)
        {
            const newLayer = UI.createElement(HTMLDivElement, "div");
            newLayer.classList.add("layer");
            canvas.appendChild(newLayer);
        }
    }
    else
    {
        for (let i = newLayers; i < oldLayerList.length; ++i)
        {
            canvas.removeChild(oldLayerList[i]);
        }
    }
    const layerList = UI.getElementsByClassName(HTMLDivElement, "layer");
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
    updateAnimation();
};
const updateCanvasSize = () =>
{
    const newCanvasSize = parseFloat(canvasSizeSelect.get());
    const newCanvasSizeRate = Math.sqrt(newCanvasSize /100.0);
    const canvasMergin = (1 -newCanvasSizeRate) *100 /2;
    [ "top", "right", "bottom", "left", ].forEach
    (
        i => canvas.style.setProperty(i, `${canvasMergin}%`)
    );
    updateDiagonalSize();
};
let diagonalSize = getDiagonalSize();
const updateDiagonalSize = () =>
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
    updateAnimation();
};
let newSpan = parseInt(spanSelect.get());
const updateSpan = () =>
{
    newSpan = parseInt(spanSelect.get());
    if (span !== newSpan)
    {
        if ( ! isInAnimation())
        {
            offsetAt = offsetAt *(newSpan /span);
            span = newSpan;
        }
    }
};
const updateFuseFps = () =>
{
    Fps.fuseFps = parseFloat(fuseFpsSelect.get());
};
updateFuseFps();
const updateEasing = () =>
{
    easing = easingCheckbox.get() ?
        (t: number) => t <= 0.5 ?
            2 *Math.pow(t, 2):
            1 -(2 *Math.pow(1 -t, 2)):
        (t: number) => t;
    updateAnimation();
};
updateEasing();
window.addEventListener
(
    "keydown",
    (event: KeyboardEvent) =>
    {
        if ("Shift" === event.key)
        {
            document.body.classList.toggle("press-shift", true);
        }
        const focusedElementTagName = document.activeElement?.tagName?.toLowerCase() ?? "";
        if (["input", "textarea", "button"].indexOf(focusedElementTagName) < 0)
        {
            if (" " === event.key || "Space" === event.code)
            {
                playOrPause();
            }
            else
            if ("F" === event.key.toUpperCase())
            {
                withFullscreen.toggle();
                if (isInAnimation())
                {
                    updateFullscreenState();
                }
            }
            else
            if ("S" === event.key.toUpperCase())
            {
                showFPS.toggle();
                fpsElement.innerText = "";
            }
            else
            if ("ArrowUp" === event.key)
            {
                if (event.shiftKey)
                {
                    canvasSizeSelect.switch(true);
                    updateCanvasSize();
                }
                else
                {
                    layersSelect.switch(true);
                    updateLayers();
                }
            }
            else
            if ("ArrowDown" === event.key)
            {
                if (event.shiftKey)
                {
                    canvasSizeSelect.switch(false);
                    updateCanvasSize();
                }
                else
                {
                    layersSelect.switch(false);
                    updateLayers();
                }
            }
            else
            if ("ArrowLeft" === event.key)
            {
                if (event.shiftKey)
                {
                    //fuseFpsSelect.switch(false);
                }
                else
                {
                    spanSelect.switch(true);
                    updateSpan();
                }
            }
            else
            if ("ArrowRight" === event.key)
            {
                if (event.shiftKey)
                {
                    //fuseFpsSelect.switch(true);
                }
                else
                {
                    spanSelect.switch(false);
                    updateSpan();
                }
            }
            else
            if ("Shift" !== event.key)
            {
                console.log("💡 UnknownKeyDown:", { key: event.key, code:event.code });
            }
        }
    }
);
window.addEventListener
(
    "keyup",
    (event: KeyboardEvent) =>
    {
        if ("Shift" === event.key)
        {
            document.body.classList.toggle("press-shift", false);
        }
    }
);
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${timespanToString(new Date().getTime() -build.tick, 1)} ${Locale.map("ago")} )`);
