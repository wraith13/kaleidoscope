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
const screenBody = <HTMLDivElement>document.getElementById("screen-body");
const canvas = <HTMLDivElement>document.getElementById("canvas");
const topCoat = <HTMLDivElement>document.getElementById("top-coat");
const patternSelect = <HTMLSelectElement>document.getElementById("pattern");
const modeSelect = <HTMLSelectElement>document.getElementById("mode");
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
patternSelect.value = config.patternDefault;
modeSelect.value = config.modeDefault;
canvasSizeSelect.value = config.canvasSizeDefault.toString();
layersSelect.value = config.layersDefault.toString();
spanSelect.value = config.spanDefault.toString();
fuseFpsSelect.value = config.fuseFpsDefault.toString();
easingCheckbox.checked = config.easingDefault;
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
const makeRandomArguments = (): FlounderStyle.Type.Arguments =>
{
    const diagonalSize = getDiagonalSize();
    const result = randomSelect(getPatterns())
    (
        rate
        (
            diagonalSize *config.intervalSizeMinRate,
            diagonalSize *config.intervalSizeMaxRate
        )
        (Math.random())
    );
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
    arguments: FlounderStyle.Type.Arguments | undefined;
    foregroundColor: FlounderStyle.Type.Color;
    backgroundColor: FlounderStyle.Type.Color;
}
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
        animationStep(now);
        window.requestAnimationFrame(animation);
    }
    else
    {
        offsetAt = now -startAt;
    }
};
const pause = () =>
{
    document.body.classList.toggle("immersive", false);
    //fpsElement.innerText = "";
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
const updateLayers = (newLayers: number) =>
{
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
    layers = layerList.map
    (
        (layer, ix) =>
        (
            <Layer>
            {
                layer,
                mile: layers[ix]?.mile ?? 0,
                offset: ix /layerList.length,
                arguments: layers[ix]?.arguments,
                // foregroundColor: "forestgreen",
                // backgroundColor: "blanchedalmond",
            }
        )
    );
};
playButton.addEventListener
(
    "click",
    event =>
    {
        if ( ! document.body.classList.contains("immersive"))
        {
            event.stopPropagation();
            document.body.classList.toggle("immersive", true);
            document.body.classList.toggle("mousemove", false);
            if (fullscreenEnabled && withFullscreen.checked)
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
            const canvasMergin = (1 -Math.sqrt(parseFloat(canvasSizeSelect.value) /100.0)) *100 /2;
            [ "top", "right", "bottom", "left", ].forEach
            (
                i => canvas.style.setProperty(i, `${canvasMergin}%`)
            );
            const newLayers = parseInt(layersSelect.value);
            updateLayers(newLayers);
            const newSpan = parseInt(spanSelect.value);
            if (span !== newSpan)
            {
                offsetAt = offsetAt *(newSpan /span);
                span = newSpan;
            }
            Fps.fuseFps = parseFloat(fuseFpsSelect.value);
            easing = easingCheckbox.checked ?
                (t: number) => t <= 0.5 ?
                    2 *Math.pow(t, 2):
                    1 -(2 *Math.pow(1 -t, 2)):
                (t: number) => t;
            fpsElement.innerText = "";
            switch(modeSelect.value ?? "phi-colors")
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
        }
        else
        {
            pause();
        }
    }
);
