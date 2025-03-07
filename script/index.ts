import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
import { Fps } from "./fps";
import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
import config from "@resource/config.json";
const lang = "ja" === navigator.language.substring(0, 2) ? "ja": "en";
export const localeMaster =
{
    en: localeEn,
    ja: localeJa,
};
export type LocaleKeyType =
    keyof typeof localeEn &
    keyof typeof localeJa;
export type LocaleType = keyof typeof localeMaster;
export const localeMap = (key: LocaleKeyType) => localeMaster[lang][key];
const makeSelectOption = (value: string, text: string) =>
{
    const option = document.createElement("option");
    option.value = value;
    option.innerText = text;
    return option;
};
const toggleChecked = (dom: HTMLInputElement, checked?: boolean) =>
    dom.checked = checked ?? ! dom.checked;
const switchSelect = (dom: HTMLSelectElement, valueOrDirection: string | number | boolean) =>
{
    if ("boolean" === typeof valueOrDirection)
    {
        const options = Array.from(dom.getElementsByTagName("option"));
        const optionValues = options.map(i => i.value);
        const index = optionValues.indexOf(dom.value);
        const nextIndex = index +(valueOrDirection ? -1: 1);
        const nextValue = optionValues[nextIndex];
        if (undefined !== nextValue)
        {
            dom.value = nextValue;
        }
    }
    else
    {
        dom.value = `${valueOrDirection}`;
    }
};
const screenBody = <HTMLDivElement>document.getElementById("screen-body");
const canvas = <HTMLDivElement>document.getElementById("canvas");
const topCoat = <HTMLDivElement>document.getElementById("top-coat");
const patternSelect = <HTMLSelectElement>document.getElementById("pattern");
const coloringSelect = <HTMLSelectElement>document.getElementById("coloring");
const canvasSizeSelect = <HTMLSelectElement>document.getElementById("canvas-size");
const playButton = <HTMLButtonElement>document.getElementById("play-button");
config.canvasSizeEnum.forEach
(
    i => canvasSizeSelect.appendChild(makeSelectOption(i.toString(), `${i} %`))
);
const layersSelect = <HTMLSelectElement>document.getElementById("layers");
config.layersEnum.forEach
(
    i => layersSelect.appendChild(makeSelectOption(i.toString(), `${i}`))
);
const spanSelect = <HTMLSelectElement>document.getElementById("span");
config.spanEnum.forEach
(
    i => spanSelect.appendChild
    (
        makeSelectOption
        (
            i.toString(),
            i < 1000 ? `${i} ${localeMap("timeUnitMs")}`:
            i < 60000 ? `${i /1000} ${localeMap("timeUnitS")}`:
            i < 3600000 ?`${i /60000} ${localeMap("timeUnitM")}`:
            `${i /3600000} ${localeMap("timeUnitH")}`
        )
    )
);
const fuseFpsSelect = <HTMLSelectElement>document.getElementById("fuse-fps");
config.fuseFpsEnum.forEach
(
    i => fuseFpsSelect.appendChild(makeSelectOption(i.toString(), `${i}`))
);
const easingCheckbox = <HTMLInputElement>document.getElementById("easing");
const withFullscreen = <HTMLInputElement>document.getElementById("with-fullscreen");
const showFPS = <HTMLInputElement>document.getElementById("show-fps");
const fpsElement = <HTMLDivElement>document.getElementById("fps");
switchSelect(patternSelect, config.patternDefault);
switchSelect(coloringSelect, config.coloringDefault);
switchSelect(canvasSizeSelect, config.canvasSizeDefault);
switchSelect(layersSelect, config.layersDefault);
switchSelect(spanSelect, config.spanDefault);
switchSelect(fuseFpsSelect, config.fuseFpsDefault);
toggleChecked(easingCheckbox, config.easingDefault);
layersSelect.addEventListener("change", () => updateLayers());
canvasSizeSelect.addEventListener("change", () => updateCanvasSize());
spanSelect.addEventListener("change", () => updateSpan());
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
    switch(patternSelect.value)
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
            diagonalSize *config.intervalSizeMinRate,
            diagonalSize *config.intervalSizeMaxRate
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
if ( ! fullscreenEnabled && withFullscreen.parentElement)
{
    withFullscreen.parentElement.style.setProperty("display", "none");
}
let startAt = 0;
let offsetAt = 0;
let span = config.spanDefault;
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
(<HTMLDivElement>document.getElementsByClassName("layer")[0]).style.setProperty("background-color", makeColor(0.0));
const informationList = <HTMLUListElement>document.getElementById("information-list");
config.informations.forEach
(
    i =>
    {
        const li = document.createElement("li");
        li.innerText = localeMap(<LocaleKeyType>i);
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
const isInAnimation = () => document.body.classList.contains("immersive");
const animation = (now: number) =>
{
    if (isInAnimation())
    {
        Fps.step(now);
        if (Fps.isUnderFuseFps())
        {
            pause();
        }
        if (showFPS.checked)
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
    else
    {
        offsetAt = now -startAt;
    }
};
const updateFullscreenState = (fullscreen?: boolean) =>
{
    if (fullscreenEnabled)
    {
        if (fullscreen ?? withFullscreen.checked)
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
                startAt = (now -offsetAt);
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
{
    if ( ! document.body.classList.contains("immersive"))
    {
        play();
    }
    else
    {
        pause();
    }
};
class ToggleClassForWhileTimer
{
    timer: number | undefined;
    constructor()
    {
        this.timer = undefined;
    }
    start(element: HTMLElement, token: string, span: number)
    {
        if (undefined !== this.timer)
        {
            clearTimeout(this.timer);
        }
        element.classList.toggle(token, true);
        this.timer = setTimeout
        (
            () =>
            {
                this.timer = undefined;
                element.classList.toggle(token, false);
            },
            span
        );
    }
}
topCoat.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        if (event.target === event.currentTarget)
        {
            pause();
        }
    }
);
const mousemoveTimer = new ToggleClassForWhileTimer();
screenBody.addEventListener
(
    "mousemove",
    () => mousemoveTimer.start(document.body, "mousemove", 1000)
)
document.querySelectorAll("label[for]").forEach
(
    label =>
    {
        const selectId = label.getAttribute("for");
        if (selectId)
        {
            const select = <HTMLSelectElement>document.getElementById(selectId);
            if (select && "select" === select.tagName.toLowerCase())
            {
                label.addEventListener
                (
                    'click',
                    e =>
                    {
                        e.preventDefault();
                        select.focus();
                        if ("showPicker" in select)
                        {
                            select.showPicker();
                        }
                        else
                        {
                            (<any>select).click();
                        }
                    }
                );
            }
        }
    }
);
const updateColoring = () =>
{
    switch(coloringSelect.value ?? "phi-colors")
    {
    case "monochrome":
        getForegroundColor = (i: Layer, _ix: number) => indexSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, i.mile +1.0);
        break;
    case "primary-colors":
        getForegroundColor = (i: Layer, ix: number) => indexSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +i.mile +1.0);
        break;
    case "phi-colors":
    default:
        getForegroundColor = (i: Layer, _ix: number) => <FlounderStyle.Type.Color>makeColor(i.mile +i.offset +1.0, 0.6);
        break;
    }
};
updateColoring();
const updateLayers = () =>
{
    const newLayers = parseInt(layersSelect.value);
    const oldLayerList = Array.from(document.getElementsByClassName("layer"));
    if (oldLayerList.length < newLayers)
    {
        for (let i = oldLayerList.length; i < newLayers; ++i)
        {
            const newLayer = document.createElement("div");
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
    const layerList = Array.from(document.getElementsByClassName("layer"));
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
    if ( ! isInAnimation())
    {
        animationStep(startAt +offsetAt);
    }
};
const updateCanvasSize = () =>
{
    const newCanvasSize = parseFloat(canvasSizeSelect.value);
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
    if ( ! isInAnimation())
    {
        animationStep(startAt +offsetAt);
    }
    diagonalSize = newDiagonalSize;
};
let newSpan = parseInt(spanSelect.value);
const updateSpan = () =>
{
    newSpan = parseInt(spanSelect.value);
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
    Fps.fuseFps = parseFloat(fuseFpsSelect.value);
};
updateFuseFps();
const updateEasing = () =>
{
    easing = easingCheckbox.checked ?
        (t: number) => t <= 0.5 ?
            2 *Math.pow(t, 2):
            1 -(2 *Math.pow(1 -t, 2)):
        (t: number) => t;
    if ( ! isInAnimation())
    {
        animationStep(startAt +offsetAt);
    }
};
updateEasing();
playButton.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        playButton.blur();
        playOrPause();
    }
);
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
                toggleChecked(withFullscreen);
                if (isInAnimation())
                {
                    updateFullscreenState();
                }
            }
            else
            if ("ArrowUp" === event.key)
            {
                if (event.shiftKey)
                {
                    switchSelect(canvasSizeSelect, true);
                    updateCanvasSize();
                }
                else
                {
                    switchSelect(layersSelect, true);
                    updateLayers();
                }
            }
            else
            if ("ArrowDown" === event.key)
            {
                if (event.shiftKey)
                {
                    switchSelect(canvasSizeSelect, false);
                    updateCanvasSize();
                }
                else
                {
                    switchSelect(layersSelect, false);
                    updateLayers();
                }
            }
            else
            if ("ArrowLeft" === event.key)
            {
                if (event.shiftKey)
                {
                    switchSelect(fuseFpsSelect, false);
                }
                else
                {
                    switchSelect(spanSelect, true);
                    updateSpan();
                }
            }
            else
            if ("ArrowRight" === event.key)
            {
                if (event.shiftKey)
                {
                    switchSelect(fuseFpsSelect, true);
                }
                else
                {
                    switchSelect(spanSelect, false);
                    updateSpan();
                }
            }
            else
            {
                console.log({ unknownKeyDown: { key: event.key, code:event.code } });
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
