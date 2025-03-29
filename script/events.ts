//import { Tools } from "@tools";
import { Controller } from "@controller";
import { UI } from "./ui";
export namespace Events
{
    export const toggleAnimation = () =>
    {
        switch(true)
        {
        case Controller.Animation.isInAnimation():
            Controller.Animation.pauseAnimation();
            break;
        case Controller.Benchmark.isInBenchmark():
            Controller.Benchmark.stopBenchmark();
            break;
        default:
            Controller.Animation.playAnimation();
            break;
        }
    }
    UI.playButton.data.click = (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        toggleAnimation();
    };
    UI.runBenchmarkButton.data.click = (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        Controller.Benchmark.runBenchmark();
    };
    UI.colorspaceSelect.options = {
        ...UI.colorspaceSelect.options,
        change: () => Controller.Animation.updateColorspace()
    };
    UI.coloringSelect.options = {
        ...UI.coloringSelect.options,
        change: () => Controller.Animation.updateColoring()
    };
    UI.patternSelect.options = {
        ...UI.patternSelect.options,
        change: () => Controller.Animation.updatePattern()
    };
    UI.canvasSizeSelect.options = {
        ...UI.canvasSizeSelect.options,
        change: () => Controller.Animation.updateCanvasSize()
    };
    UI.layersSelect.options = {
        ...UI.layersSelect.options,
        change: () => Controller.Animation.updateLayers()
    };
    UI.cycleSpanSelect.options = {
        ...UI.cycleSpanSelect.options,
        change: () => Controller.Animation.updateCycleSpan()
    };
    UI.fuseFpsSelect.options = {
        ...UI.fuseFpsSelect.options,
        change: () => Controller.Animation.updateFuseFps()
    };
    // UI.easingCheckbox.options = {
    //     ...UI.easingCheckbox.options,
    //     change: () => Controller.Animation.updateEasing()
    // };
    // UI.withFullscreen.options = {
    //     ...UI.withFullscreen.options,
    //     change: () => Controller.Animation.updateWithFullscreen()
    // };
    UI.showFps.options = {
        ...UI.showFps.options,
        change: () => Controller.Animation.updateShowFps()
    };
}