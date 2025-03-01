import { FlounderStyle } from "flounder.style.js";
import { phiColors } from "phi-colors"
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
const withFullscreen = <HTMLInputElement>document.getElementById("with-fullscreen");
const showFPS = <HTMLInputElement>document.getElementById("show-fps");
const fpsElement = <HTMLDivElement>document.getElementById("fps");
patternSelect.value = config.patternDefault;
modeSelect.value = config.modeDefault;
canvasSizeSelect.value = config.canvasSizeDefault.toString();
layersSelect.value = config.layersDefault.toString();
spanSelect.value = config.spanDefault.toString();
fuseFpsSelect.value = config.fuseFpsDefault.toString();
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
    foregroundColor: "black", // dummy
    backgroundColor: "black", // dummy
    intervalSize,
    depth: 0.0,
    maxPatternSize: randomSelect([ undefined, intervalSize /4, ]),
    reverseRate: randomSelect([ undefined, 0.0, ]),
});
const makeRandomTrispotArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
    makeRandomSpotArguments("trispot", intervalSize);
const makeRandomTetraspotArguments = (intervalSize: IntervalSize): FlounderStyle.Type.Arguments =>
    makeRandomSpotArguments("tetraspot", intervalSize);
const makeRandomLineArguments = (type: FlounderStyle.Type.LineArguments["type"], intervalSize: IntervalSize): FlounderStyle.Type.LineArguments =>
({
    type,
    layoutAngle: Math.random(),
    foregroundColor: "black", // dummy
    backgroundColor: "black", // dummy
    intervalSize,
    depth: 0.0,
    maxPatternSize: randomSelect([ undefined, intervalSize /(2 +makeRandomInteger(9)), ]),
    reverseRate: randomSelect([ undefined, 0.0, ]),
    anglePerDepth: randomSelect([ undefined, "auto", "-auto", 1,0, -1.0, ]),
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
    phiColors.rgbForStyle
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
interface FpsHistoryEntry
{
    fps: number;
    now: number;
    text: string;
}
const fpsCalcUnit = 5;
let frameTimings: number[] = [];
let fpsHistory: FpsHistoryEntry[] = [];
const resetFps = () =>
{
    frameTimings = [];
    fpsHistory = [];
};
const makeFpsText = (fps: number) =>
    `${fps.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 2, minimumFractionDigits: 2, })} FPS`;
const getFpsText = (now: number) =>
{
    let result = "";
    if (fpsCalcUnit <= frameTimings.length)
    {
        const first = frameTimings.shift() ?? 0;
        const fps = (fpsCalcUnit *1000.0) /(now -first);
        const current =
        {
            fps,
            now,
            text: makeFpsText(fps),
        };
        const expiredAt = now -1000;
        while(0 < fpsHistory.length && fpsHistory[0].now < expiredAt)
        {
            fpsHistory.shift();
        }
        fpsHistory.push(current);
        let currentMaxFps = current;
        let currentMinFps = current;
        fpsHistory.forEach
        (
            i =>
            {
                if (currentMaxFps.fps < i.fps)
                {
                    currentMaxFps = i;
                }
                if (i.fps < currentMinFps.fps)
                {
                    currentMinFps = i;
                }
            }
        );
        result += currentMaxFps.text +"(Max)\n" + current.text + "(Now)\n" +currentMinFps.text +"(Min)";
        if (currentMaxFps.fps < parseFloat(fuseFpsSelect.value))
        {
            pause();
        }
    }
    frameTimings.push(now);
    return result;
};
const easingCheckbox = <HTMLInputElement>document.getElementById("easing");
easingCheckbox.checked = true;
let easing: (t: number) => number;
interface Layer
{
    layer: HTMLDivElement;
    mile: number;
    offset: number;
    arguments: FlounderStyle.Type.Arguments | undefined;
}
let layers: Layer[] = [];
(<HTMLDivElement>document.getElementsByClassName("layer")[0]).style.setProperty("background-color", makeColor(0.0));
(<HTMLSpanElement>document.getElementById("warning")?.getElementsByClassName("text")?.[0]).innerText = localeMap("warningText");
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
const animation = (now: number) =>
{
    if (document.body.classList.contains("immersive"))
    {
        const fps = getFpsText(now);
        if (showFPS.checked)
        {
            fpsElement.innerText = fps;
        }
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
                        const oldForegroundColor: FlounderStyle.Type.Color =
                            i.arguments?.foregroundColor ??
                            (0 === ix ? <FlounderStyle.Type.Color>makeColor(0.0): "black");
                        i.arguments = Object.assign
                        (
                            {},
                            layers[ix -1]?.arguments ?? makeRandomArguments()
                        );
                        while(1.0 <= step)
                        {
                            ++i.mile;
                            step = getStep(universalStep, i);
                        }
                        switch(modeSelect.value ?? "phi-colors")
                        {
                        case "monochrome":
                            i.arguments.foregroundColor = indexSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, i.mile +1.0);
                            break;
                        case "primary-colors":
                            i.arguments.foregroundColor = indexSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +i.mile +1.0);
                            break;
                        case "phi-colors":
                            i.arguments.foregroundColor = <FlounderStyle.Type.Color>makeColor(i.mile +i.offset +1.0, 0.6);
                            break;
                        }
                        i.arguments.backgroundColor = oldForegroundColor;
                    }
                    i.arguments.depth = easing(step);
                    FlounderStyle.setStyle(i.layer, i.arguments);
                }
            }
        );
        window.requestAnimationFrame(animation);
    }
    else
    {
        if (undefined !== layers[0].arguments)
        {
            offsetAt = now -startAt;
            fpsElement.innerText = "";
        }
    }
};
const pause = () =>
{
    document.body.classList.toggle("immersive", false);
    if (document.fullscreenElement || "webkitFullscreenElement" in document)
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
            easing = easingCheckbox.checked ?
                (t: number) => t <= 0.5 ?
                    2 *Math.pow(t, 2):
                    1 -(2 *Math.pow(1 -t, 2)):
                (t: number) => t;
            window.requestAnimationFrame
            (
                now =>
                {
                    startAt = now -offsetAt;
                    resetFps();
                    animation(now);
                }
            );
        }
        else
        {
            pause();
        }
    }
);
