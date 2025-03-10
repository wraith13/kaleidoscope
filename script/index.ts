import { Control } from "./control";
import { UI } from "./ui";
import { Fps } from "./fps";
import { Locale } from "./locale";
import { Animation } from "./animation";
import { Shortcuts } from "./shortcuts";
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
const isInAnimation = () => document.body.classList.contains("immersive");
const playAnimation = () =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle("mousemove", false);
    updateFullscreenState();
    updateCanvasSize();
    updateLayers();
    fpsElement.innerText = "";
    start();
};
const pauseAnimation = () =>
{
    document.body.classList.toggle("immersive", false);
    //fpsElement.innerText = "";
    updateFullscreenState(false);
};
const update = () =>
{
    if ( ! isInAnimation())
    {
        Animation.update();
    }
};
const playOrPauseAnimation = () =>
    isInAnimation() ? pauseAnimation(): playAnimation();
const updateDiagonalSize = () =>
{
    Animation.updateDiagonalSize();
    update();
};
const updatePattern = (): unknown =>
    Animation.updatePattern(patternSelect.get());
const updateColoring = () =>
{
    Animation.updateColoring(coloringSelect.get());
};
const updateLayers = (): void =>
{
    Animation.updateLayers(parseInt(layersSelect.get()));
    update();
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
const updateCycleSpan = (): void =>
    Animation.updateCycleSpan(parseInt(cycleSpanSelect.get()));
const updateFuseFps = (): number =>
    Fps.fuseFps = parseFloat(fuseFpsSelect.get());
const updateEasing = () =>
{
    Animation.updateEasing(easingCheckbox.get());
    update();
};
//const playButton =
new Control.Button
({
    id:"play-button",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        playOrPauseAnimation();
    }
});
const patternSelect = new Control.Select
(
    control.pattern,
    { change: () => updatePattern(), }
);
const coloringSelect = new Control.Select
(
    control.coloring,
    { change: () => updateColoring(), }
);
const canvasSizeSelect = new Control.Select
(
    control.canvasSize,
    { makeLabel: i => `${i} %`, change: () => updateCanvasSize(), }
);
const layersSelect = new Control.Select
(
    control.layers,
    { change: () => updateLayers(), }
);
const cycleSpanSelect = new Control.Select
(
    control.cycleSpan,
    { makeLabel: timespanToString, change: () => updateCycleSpan(), }
);
const fuseFpsSelect = new Control.Select
(
    control.fuseFps,
    { change: () => updateFuseFps(), }
);
const easingCheckbox = new Control.Checkbox(control.easing);
const withFullscreen = new Control.Checkbox(control.withFullscreen);
if ( ! UI.fullscreenEnabled && withFullscreen.dom.parentElement)
{
    withFullscreen.dom.parentElement.style.setProperty("display", "none");
}
const showFPS = new Control.Checkbox(control.showFPS);
const fpsElement = UI.getElementById("div", "fps");
UI.replaceChildren
(
    UI.getElementById("div", "keyboard-shortcut"),
    Shortcuts.getDisplayList().map
    (
        i =>
        [
            { tag: "span", children: i.keys.map(key => UI.createElement({ tag: "kbd", text: key })) } as const,
            { tag: "span", text: Locale.map(i.description as Locale.KeyType), } as const,
        ]
    )
    .reduce((a, b) => a.concat(b), [])
);
UI.replaceChildren
(
    UI.querySelector("ul", "#powered-by ul"),
    Object.entries(poweredBy).map
    (
        ([ text, href, ]) => ({ tag: "li", children: [ UI.createElement({ tag: "a", text, attributes: { href, } }), ], })
    )
);
UI.getElementsByClassName("div", "layer")[0].style.setProperty("background-color", Animation.makeColor(0.0));
UI.replaceChildren
(
    UI.getElementById("ul", "information-list"),
    config.informations.map(i => ({ tag: "li", text: Locale.map(<Locale.KeyType>i), }))
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
    if (isInAnimation())
    {
        Fps.step(now);
        if (showFPS.get())
        {
            fpsElement.innerText = Fps.getText();
        }
        if (Fps.isUnderFuseFps())
        {
            pauseAnimation();
        }
        else
        {
            Animation.step(now);
            window.requestAnimationFrame(animation);
        }
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
topCoat.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        if (event.target === event.currentTarget)
        {
            console.log("👆 topCoat.Click:", event, topCoat);
            pauseAnimation();
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
updatePattern();
updateColoring();
updateDiagonalSize();
updateCycleSpan();
updateEasing();
updateFuseFps();
UI.querySelectorAllWithFallback("label", [ "label[for]:has(select)", "label[for]" ])
    .forEach(label => UI.showPickerOnLabel(label));
UI.querySelectorAllWithFallback("span", [ "[data-lang-key]" ])
    .forEach(i => i.innerText = Locale.map(i.getAttribute("data-lang-key") as Locale.KeyType));
Shortcuts.setCommandMap
({
    "toggleControlPressOn": () => document.body.classList.toggle("press-control", true),
    "toggleControlPressOff": () => document.body.classList.toggle("press-control", false),
    "playOrPause": () => playOrPauseAnimation(),
    "switchPatternForward": () => patternSelect.switch(true),
    "switchPatternBackward": () => patternSelect.switch(false),
    "switchColoringForward": () => coloringSelect.switch(true),
    "switchColoringBackward": () => coloringSelect.switch(false),
    "increaseCanvasSize": () => canvasSizeSelect.switch(true),
    "decreaseCanvasSize": () => canvasSizeSelect.switch(false),
    "increaseLayer": () => layersSelect.switch(true),
    "decreaseLayer": () => layersSelect.switch(false),
    "speedDown": () => cycleSpanSelect.switch(true),
    "speedUp": () => cycleSpanSelect.switch(false),
    "toggleFullScreen": () =>
    {
        withFullscreen.toggle();
        if (isInAnimation())
        {
            updateFullscreenState();
        }
    },
    "toggleShowFPS": () =>
    {
        showFPS.toggle();
        fpsElement.innerText = "";
    }
});
window.addEventListener("resize", () => updateDiagonalSize());
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${timespanToString(new Date().getTime() -build.tick, 1)} ${Locale.map("ago")} )`);
