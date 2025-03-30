import { Library } from "@library";
import { Features } from "@features";
import { Base } from "./base";
import { Animation } from "./animation";
import { UI } from "../ui";
import config from "@resource/config.json";
export namespace Benchmark
{
    export const benchmark = new Features.Benchmark.Measure(UI.benchmarkCanvas);
    export const loopBenchmark = (now: number) =>
    {
        if (isInBenchmark())
        {
            Features.Fps.step(now);
            UI.showFps.get();
            if (Features.Fps.isUnderFuseFps())
            {
                stopBenchmark();
            }
            else
            {
                benchmark.step(now);
                window.requestAnimationFrame(loopBenchmark);
            }
        }
    };
    export const isInBenchmark = () =>
        Base.isInMode("benchmark");
    export const setBenchmarkProgressBarSize = (size: number) =>
        Library.UI.cullOrBreed(UI.benchmarkProgressBar, { tag: "div", className: "progress-block", }, size);
    export const setBenchmarkProgressBarProgress = (progress: number) =>
        Array.from(UI.benchmarkProgressBar.children).forEach((i, ix) => i.classList.toggle("on", ix < progress));
    export const runBenchmark = () =>
    {
        Base.intoMode("benchmark");
        setBenchmarkProgressBarSize(7);
        setBenchmarkProgressBarProgress(1);
        // if (Library.UI.fullscreenEnabled)
        // {
        //     Library.UI.requestFullscreen(document.body);
        // }
        UI.showFps.get();
        setTimeout
        (
            () => window.requestAnimationFrame
            (
                now =>
                {
                    Animation.animator.startStep(now);
                    loopBenchmark(now);
                }
            ),
            config.startWait
        );
    };
    export const stopBenchmark = () =>
    {
        if (isInBenchmark())
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
        Base.exitMode("benchmark");
    };
}