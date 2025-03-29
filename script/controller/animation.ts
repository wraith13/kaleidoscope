import { Features } from "@features";
import { Base } from "./base";
//import { Benchmark } from "./benchmark";
import { UI } from "../ui";
import config from "@resource/config.json";
export namespace Animation
{
    export const animator = new Features.Animation.Animator(UI.canvas);
    export const isInAnimation = () => Base.isInMode("animation");
    export const playAnimation = () =>
    {
        Base.intoMode("animation");
        updateFps();
        start();
    };
    export const pauseAnimation = () =>
    {
        if (isInAnimation())
        {
            console.log
            (
                "📈 fps",
                {
                    count: Features.Fps.standardDeviation.count,
                    mean: Features.Fps.standardDeviation.mean,
                    standardDeviation: Features.Fps.standardDeviation.getStandardDeviation(),
                }
            );
        }
        Base.exitMode("animation");
    };
    export const loopAnimation = (now: number) =>
    {
        if (isInAnimation())
        {
            Features.Fps.step(now);
            updateFps();
            if (Features.Fps.isUnderFuseFps())
            {
                pauseAnimation();
            }
            else
            {
                animator.step(now);
                window.requestAnimationFrame(loopAnimation);
            }
        }
    };
    export const start = () => setTimeout
    (
        () => window.requestAnimationFrame
        (
            now =>
            {
                animator.startStep(now);
                loopAnimation(now);
            }
        ),
        config.startWait
    );
    // export const toggleAnimation = () =>
    // {
    //     switch(true)
    //     {
    //     case isInAnimation():
    //         pauseAnimation();
    //         break;
    //     // case Benchmark.isInBenchmark():
    //     //     Benchmark.stopBenchmark();
    //     //     break;
    //     default:
    //         playAnimation();
    //         break;
    //     }
    // }
    export const updateFps = () =>
    {
        if (UI.showFps.get())
        {
            UI.fpsDisplay.innerText = Features.Fps.getText();
        }
    }
    export const update = (setter?: () => unknown) =>
    {
        setter?.();
        if ( ! isInAnimation())
        {
            animator.update();
        }
    };
    export const updateDiagonalSize = () => update(() => animator.updateDiagonalSize());
    export const updateColorspace = (): unknown => update(() => animator.setColorspace(UI.colorspaceSelect.get()));
    export const updateColoring = (): unknown => update(() => animator.setColoring(UI.coloringSelect.get()));
    export const updatePattern = (): unknown => update(() => animator.setPattern(UI.patternSelect.get()));
    export const updateLayers = (): void => update(() => animator.setLayers(parseInt(UI.layersSelect.get())));
    export const setCanvasSize = (size: string) =>
    {
        [ "width", "height", ].forEach
        (
            i => UI.canvas.style.setProperty(i, size)
        );
        updateDiagonalSize();
    };
    export const updateCanvasSize = () =>
    {
        const newCanvasSize = parseFloat(UI.canvasSizeSelect.get());
        const newCanvasSizeRate = Math.sqrt(newCanvasSize /100.0);
        const canvasSize = newCanvasSizeRate *100.0;
        setCanvasSize(`${canvasSize}%`);
    };
    export const updateCycleSpan = (): void => update(() => animator.setCycleSpan(parseInt(UI.cycleSpanSelect.get())));
    export const updateFuseFps = (): number => Features.Fps.fuseFps = parseFloat(UI.fuseFpsSelect.get());
    export const updateEasing = () => update(() => animator.setEasing(UI.easingCheckbox.get()));
    export const updateShowFps = () =>
    {
        UI.fpsDisplay.classList.toggle("hide", ! UI.showFps.get());
    };
    export const initialize = () =>
    {
        updateColorspace();
        updateColoring();
        updatePattern();
        updateCanvasSize();
        updateEasing();
        updateLayers();
        updateCycleSpan();
        updateFuseFps();
        updateShowFps();
    };
}
