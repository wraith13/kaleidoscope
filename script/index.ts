import { Control } from "./control";
import { UI } from "./ui";
import { Fps } from "./fps";
import { Locale } from "./locale";
import { Animation } from "./animation";
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
const screenBody = UI.getElementById("div", "screen-body");
const canvas = UI.getElementById("div", "canvas");
const topCoat = UI.getElementById("div", "top-coat");
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
const patternSelect = new Control.Select
(
    control.pattern,
    {
        change: () => updatePattern,
    }
);
const updatePattern = () =>
    Animation.pattern = patternSelect.get();
updatePattern();
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
if ( ! UI.fullscreenEnabled && withFullscreen.dom.parentElement)
{
    withFullscreen.dom.parentElement.style.setProperty("display", "none");
}
const showFPS = new Control.Checkbox(control.showFPS);
const fpsElement = UI.getElementById("div", "fps");
const poweredByElement = UI.querySelector("ul", "#powered-by ul");
Object.entries(poweredBy).forEach
(
    ([ text, href, ]) => UI.appendChild
    (
        poweredByElement,
        "li",
        {
            children: [ UI.createElement("a", { text, attributes: { href, } }), ],
        }
    )
);
UI.getElementsByClassName("div", "layer")[0].style.setProperty("background-color", Animation.makeColor(0.0));
const informationList = UI.getElementById("ul", "information-list");
config.informations.forEach
(
    i => UI.appendChild(informationList, "li", { text: Locale.map(<Locale.KeyType>i), })
);
const updateFullscreenState = (fullscreen?: boolean) =>
{
    if (UI.fullscreenEnabled)
    {
        if (fullscreen ?? withFullscreen.get())
        {
            UI.requestFullscreen(document.body);
        }
        else
        {
            UI.exitFullscreen();
        }
    }
};
const animation = (now: number) =>
{
    Fps.step(now);
    if (Animation.isIn() && ! Fps.isUnderFuseFps())
    {
        if (showFPS.get())
        {
            fpsElement.innerText = Fps.getText();
        }
        Animation.adjustSpan(now);
        Animation.step(now);
        window.requestAnimationFrame(animation);
    }
    else
    {
        pause();
        Animation.pauseStep(now);
    }
};
const start = () => setTimeout
(
    () => window.requestAnimationFrame
    (
        now =>
        {
            Fps.reset();
            Animation.startStep(now);
            animation(now);
        }
    ),
    config.startWait
);
const play = () =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle("mousemove", false);
    updateFullscreenState();
    updateCanvasSize();
    updateLayers();
    fpsElement.innerText = "";
    start();
};
const pause = () =>
{
    document.body.classList.toggle("immersive", false);
    //fpsElement.innerText = "";
    updateFullscreenState(false);
};
const playOrPause = () =>
    Animation.isIn() ? pause(): play();
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
UI.querySelectorAllWithFallback("label", [ "label[for]:has(select)", "label[for]", ])
    .forEach(label => UI.showPickerOnLabel(label));
const updateColoring = () =>
{
    Animation.updateColoring(coloringSelect.get() ?? "phi-colors");
};
updateColoring();
const updateLayers = (): void =>
    Animation.updateLayers(parseInt(layersSelect.get()));
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
const updateDiagonalSize = () =>
    Animation.updateDiagonalSize();
const updateSpan = (): void =>
    Animation.updateSpan(parseInt(spanSelect.get()));
updateSpan();
const updateFuseFps = (): number =>
    Fps.fuseFps = parseFloat(fuseFpsSelect.get());
updateFuseFps();
const updateEasing = () =>
    Animation.updateEasing(easingCheckbox.get());
updateEasing();
window.addEventListener
(
    "keydown",
    (event: KeyboardEvent) =>
    {
        if ("Control" === event.key)
        {
            document.body.classList.toggle("press-control", true);
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
                if (Animation.isIn())
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
            if ([ "Shift", "Control", ].indexOf(event.key) < 0)
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
        if ("Control" === event.key)
        {
            document.body.classList.toggle("press-control", false);
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
