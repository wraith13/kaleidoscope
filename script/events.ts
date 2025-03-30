import { Library } from "@library";
//import { Tools } from "@tools";
import { Controller } from "@controller";
import { UI } from "./ui";
import config from "@resource/config.json";
export namespace Events
{
    export const initialize = () =>
    {
        UI.playButton.data.click = (event, button) =>
        {
            event.stopPropagation();
            button.dom.blur();
            Controller.toggleAnimation();
        };
        UI.runBenchmarkButton.data.click = (event, button) =>
        {
            event.stopPropagation();
            button.dom.blur();
            Controller.Benchmark.runBenchmark();
        };
        UI.colorspaceSelect.setChange(Controller.Animation.updateColorspace);
        UI.coloringSelect.setChange(Controller.Animation.updateColoring);
        UI.patternSelect.setChange(Controller.Animation.updatePattern);
        UI.canvasSizeSelect.setChange(Controller.Animation.updateCanvasSize);
        UI.layersSelect.setChange(Controller.Animation.updateLayers);
        UI.cycleSpanSelect.setChange(Controller.Animation.updateCycleSpan);
        UI.fuseFpsSelect.setChange(Controller.Animation.updateFuseFps);
        // UI.easingCheckbox.setChange(Controller.Animation.updateEasing);
        // UI.withFullscreen.setChange(Controller.Animation.updateWithFullscreen);
        UI.showFps.setChange(Controller.Animation.updateShowFps);
        UI.canvas.addEventListener
        (
            "click",
            event =>
            {
                event.stopPropagation();
                console.log("👆 canvas.Click: pauseAnimation", event, UI.canvas);
                Controller.Animation.pauseAnimation();
            }
        );
        UI.benchmarkCanvas.addEventListener
        (
            "click",
            event =>
            {
                event.stopPropagation();
                console.log("👆 benchmarkCanvas.Click: stopBenchmark", event, UI.benchmarkCanvas);
                Controller.Benchmark.stopBenchmark();
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
            "toggleAnimation": () => Controller.toggleAnimation(),
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
                if (Controller.Animation.isInAnimation())
                {
                    Controller.Base.updateFullscreenState();
                }
            },
            "toggleShowFps": () =>
            {
                UI.showFps.toggle();
                Controller.Animation.updateShowFps();
            },
            "unknownKeyDown": () =>
            {
                showShortcutsTimer.start(UI.keyboardShortcut, "show", 3000);
            }
        });
        const showShortcutsTimer = new Library.UI.ToggleClassForWhileTimer();
        window.addEventListener("resize", () => Controller.Animation.updateDiagonalSize());
    };
}
