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
const keyboardShortcut = UI.getElementById("div", "keyboard-shortcut");
Shortcuts.getDisplayList().forEach
(
    i =>
    {
        UI.appendChild(keyboardShortcut, "span", { children: i.keys.map(key => UI.createElement("kbd", { text: key })) });
        UI.appendChild(keyboardShortcut, "span", { text: i.description, });
    }
);
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
const CommandMap: Shortcuts.CommandMap =
{
    "toggleControlPressOn": () => document.body.classList.toggle("press-control", true),
    "toggleControlPressOff": () => document.body.classList.toggle("press-control", false),
    "playOrPause": () => playOrPause(),
    "switchPatternForward": () => patternSelect.switch(true),
    "switchPatternBackward": () => patternSelect.switch(false),
    "switchColoringForward": () => coloringSelect.switch(true),
    "switchColoringBackward": () => coloringSelect.switch(false),
    "increaseCanvasSize": () =>
    {
        canvasSizeSelect.switch(true);
        updateCanvasSize();
    },
    "decreaseCanvasSize": () =>
    {
        canvasSizeSelect.switch(false);
        updateCanvasSize();
    },
    "increaseLayer": () =>
    {
        layersSelect.switch(true);
        updateLayers();
    },
    "decreaseLayer": () =>
    {
        layersSelect.switch(false);
        updateLayers();
    },
    "speedDown": () =>
    {
        spanSelect.switch(true);
        updateSpan();
    },
    "speedUp": () =>
    {
        spanSelect.switch(false);
        updateSpan();
    },
    "toggleFullScreen": () =>
    {
        withFullscreen.toggle();
        if (Animation.isIn())
        {
            updateFullscreenState();
        }
    },
    "toggleShowFPS": () =>
    {
        showFPS.toggle();
        fpsElement.innerText = "";
    }
};
window.addEventListener("keydown", (event) => Shortcuts.handleKeyEvent("onKeyDown", event, CommandMap));
window.addEventListener("keyup", (event) => Shortcuts.handleKeyEvent("onKeyUp", event, CommandMap));
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${timespanToString(new Date().getTime() -build.tick, 1)} ${Locale.map("ago")} )`);
