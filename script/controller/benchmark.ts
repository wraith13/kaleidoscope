import { Features } from "@features";
import { Library } from "@library";
import { Base } from "./base";
import { UI } from "../ui";
import config from "@resource/config.json";
export namespace Benchmark
{
    export const benchmark = new Features.Benchmark.Measurement(UI.benchmarkCanvas);
    export const loopBenchmark = (now: number) =>
    {
        if (isInBenchmark())
        {
            Features.Fps.step(now);
            UI.showFps.get();
            benchmark.step(now);
            if (benchmark.isEnd())
            {
                benchmark.end();
                setTimeout
                (
                    () =>
                    {
                        stopBenchmark();
                        showResult();
                    },
                    config.benchmark.endWait
                );
            }
            else
            {
                window.requestAnimationFrame(loopBenchmark);
            }
        }
    };
    export const isInBenchmark = () =>
        Base.isInMode("benchmark");
    export const runBenchmark = () =>
    {
        Base.intoMode("benchmark");
        benchmark.start();
        if (Library.UI.fullscreenEnabled)
        {
            Library.UI.requestFullscreen(document.body);
        }
        setTimeout
        (
            () =>
            window.requestAnimationFrame
            (
                now =>
                {
                    loopBenchmark(now);
                }
            ),
            config.benchmark.startWait
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
        document.body.classList.toggle("benchmark-rendering", false);
    };
    export const showResult = () =>
    {
        document.body.classList.toggle("immersive", true);
        document.body.classList.toggle("benchmark-result", true);
        UI.scorePanel.innerText = JSON.stringify(benchmark.result, null, 4);
    }
}