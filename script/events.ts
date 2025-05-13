import { Library } from "@library";
import { Features } from "@features";
import { Controller } from "@controller";
import { UI } from "./ui";
import config from "@resource/config.json";
export namespace Events
{
    const update = (setter?: () => unknown) =>
    {
        setter?.();
        if ( ! Controller.Animation.isInAnimation())
        {
            Controller.Animation.animator.update();
        }
    };
    const updateDiagonalSize = () =>
        update(() => Controller.Animation.animator.updateDiagonalSize());
    const updateColorspace = (): unknown =>
        update(() => Controller.Animation.animator.setColorspace(UI.colorspaceSelect.get()));
    const updateColoring = (): unknown =>
        update(() => Controller.Animation.animator.setColoring(UI.coloringSelect.get()));
    const updatePattern = (): unknown =>
        update(() => Controller.Animation.animator.setPattern(UI.patternSelect.get()));
    const updateLayers = (): void =>
        update(() => Controller.Animation.animator.setLayers(parseInt(UI.layersSelect.get())));
    const updateSpotsLayers = (): void =>
        update(() => Controller.Animation.animator.setSpotsLayers(parseInt(UI.spotslayersSelect.get()) /100.0));
    const setCanvasSize = (size: string) =>
    {
        [ "width", "height", ].forEach
        (
            i => UI.canvas.style.setProperty(i, size)
        );
        updateDiagonalSize();
    };
    const updateCanvasSize = () =>
    {
        const newCanvasSize = parseFloat(UI.canvasSizeSelect.get());
        const newCanvasSizeRate = Math.sqrt(newCanvasSize /100.0);
        const canvasSize = newCanvasSizeRate *100.0;
        setCanvasSize(`${canvasSize}%`);
    };
    const updateCycleSpan = (): void =>
        update(() => Controller.Animation.animator.setCycleSpan(parseInt(UI.cycleSpanSelect.get())));
    const updateFuseFps = (): number =>
        Features.Fps.fuseFps = parseFloat(UI.fuseFpsSelect.get());
    const updateEasing = () =>
        update(() => Controller.Animation.animator.setEasing(UI.easingCheckbox.get()));
    const updateShowFps = () =>
        UI.fpsDisplay.classList.toggle("hide", ! UI.showFps.get());
    const updateShowClock = () =>
        UI.clockDisplay.classList.toggle("hide", ! UI.showClock.get());
    export const initialize = () =>
    {
        UI.playButton.data.click = (event, button) =>
        {
            event?.stopPropagation();
            button.dom.blur();
            Controller.toggleAnimation();
        };
        UI.runBenchmarkButton.data.click = (event, button) =>
        {
            event?.stopPropagation();
            button.dom.blur();
            Controller.Benchmark.runBenchmark();
        };
        UI.colorspaceSelect.setChange(updateColorspace);
        UI.coloringSelect.setChange(updateColoring);
        UI.patternSelect.setChange(updatePattern);
        UI.canvasSizeSelect.setChange(updateCanvasSize);
        UI.layersSelect.setChange(updateLayers);
        UI.spotslayersSelect.setChange(updateSpotsLayers);
        UI.cycleSpanSelect.setChange(updateCycleSpan);
        UI.fuseFpsSelect.setChange(updateFuseFps);
        UI.easingCheckbox.setChange(updateEasing);
        // UI.withFullscreen.setChange(Controller.Animation.updateWithFullscreen);
        UI.showFps.setChange(updateShowFps);
        UI.showClock.setChange(updateShowClock);
        UI.benchmarkAbortButton.data.click = (event, button) =>
        {
            event?.stopPropagation();
            button.dom.blur();
            Controller.Benchmark.stopBenchmark();
        };
        UI.benchmarkResultCloseButton.data.click = (event, button) =>
        {
            event?.stopPropagation();
            button.dom.blur();
            //Controller.Benchmark.runBenchmark();
            document.body.classList.toggle("immersive", false);
            document.body.classList.toggle("benchmark-result", false);
        };
        UI.canvas.addEventListener
        (
            "click",
            event =>
            {
                event.stopPropagation();
                if (Controller.Benchmark.isInBenchmark())
                {
                    console.log("👆 canvas.Click: stopBenchmark", event, UI.canvas);
                    Controller.Benchmark.stopBenchmark();
                }
                else
                {
                    console.log("👆 canvas.Click: pauseAnimation", event, UI.canvas);
                    Controller.Animation.pauseAnimation();
                }
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
                updateShowFps();
            },
            "unknownKeyDown": () =>
            {
                if ( ! Controller.Benchmark.isInBenchmarkOrResult())
                {
                    showShortcutsTimer.start(UI.keyboardShortcut, "show", 3000);
                }
            }
        });
        const showShortcutsTimer = new Library.UI.ToggleClassForWhileTimer();
        window.addEventListener("resize", () => updateDiagonalSize());
        [
            UI.colorspaceSelect,
            UI.coloringSelect,
            UI.patternSelect,
            UI.canvasSizeSelect,
            UI.layersSelect,
            UI.spotslayersSelect,
            UI.cycleSpanSelect,
            UI.fuseFpsSelect,
            UI.easingCheckbox,
            // UI.withFullscreen,
            UI.showFps,
        ].forEach(i => i.fire());
    };
}
