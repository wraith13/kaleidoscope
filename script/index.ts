import { Library } from "@library";
import { Tools } from "@tools";
//import { Controller } from "@controller";
import { Base } from "@controller/base";
import { Animation } from "@controller/animation";
import { Benchmark } from "@controller/benchmark";
import config from "@resource/config.json";
import { UI } from "./ui";
import { Events } from "./events";
UI.canvas.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        console.log("👆 canvas.Click: pauseAnimation", event, UI.canvas);
        Animation.pauseAnimation();
    }
);
UI.benchmarkCanvas.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        console.log("👆 benchmarkCanvas.Click: stopBenchmark", event, UI.benchmarkCanvas);
        Benchmark.stopBenchmark();
    }
);
const mouseMoveTimer = new Library.UI.ToggleClassForWhileTimer();
UI.screenBody.addEventListener
(
    "mousemove",
    _event =>
    {
        if (config.log.mousemove && ! mouseMoveTimer.isOn())
        {
            console.log("🖱️ MouseMove:", event, UI.screenBody);
        }
        mouseMoveTimer.start(document.body, "mousemove", 1000)
    }
);
Animation.updateColorspace();
Animation.updateColoring();
Animation.updatePattern();
Animation.updateCanvasSize();
Animation.updateEasing();
Animation.updateLayers();
Animation.updateCycleSpan();
Animation.updateFuseFps();
Animation.updateShowFps();
UI.initializeLanguage();
Library.UI.querySelectorAllWithFallback("label", [ "label[for]:has(select)", "label[for]" ])
    .forEach(label => Library.UI.showPickerOnLabel(label));
Library.Shortcuts.setCommandMap
({
    "nop": () => { },
    "toggleHideUI": () =>
    {
        document.body.classList.toggle("hide-ui");
        if (document.body.classList.contains("hide-ui"))
        {
            UI.keyboardShortcut.classList.toggle("show", false);
        }
    },
    "toggleAnimation": () => Events.toggleAnimation(),
    "switchColoringForward": () => UI.coloringSelect.switch(true),
    "switchColoringBackward": () => UI.coloringSelect.switch(false),
    "switchPatternForward": () => UI.patternSelect.switch(true),
    "switchPatternBackward": () => UI.patternSelect.switch(false),
    "increaseCanvasSize": () => UI.canvasSizeSelect.switch(true),
    "decreaseCanvasSize": () => UI.canvasSizeSelect.switch(false),
    "increaseLayer": () => UI.layersSelect.switch(true),
    "decreaseLayer": () => UI.layersSelect.switch(false),
    "speedDown": () => UI.cycleSpanSelect.switch(true),
    "speedUp": () => UI.cycleSpanSelect.switch(false),
    "toggleFullScreen": () =>
    {
        UI.withFullscreen.toggle();
        if (Animation.isInAnimation())
        {
            Base.updateFullscreenState();
        }
    },
    "toggleShowFps": () =>
    {
        UI.showFps.toggle();
        Animation.updateShowFps();
    },
    "unknownKeyDown": () =>
    {
        showShortcutsTimer.start(UI.keyboardShortcut, "show", 3000);
    }
});
const showShortcutsTimer = new Library.UI.ToggleClassForWhileTimer();
window.addEventListener("resize", () => Animation.updateDiagonalSize());
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${Tools.Timespan.toDisplayString(new Date().getTime() -build.tick, 1)} ${Library.Locale.map("ago")} )`);
