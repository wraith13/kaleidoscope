import { Tools } from "@tools";
import { Library } from "@library";
import { UI } from "../ui";
import { Fps } from "./fps";
import { Animation } from "./animation";
import config from "@resource/config.json";
export namespace Benchmark
{
    export const animator = new Animation.Animator
    (
        UI.benchmarkCanvas,
        new Tools.Random.IndexedRandom
        (
            Tools.Hash.fnv1a_32,
            "benchmark",
        )
        .getFunction()
    );
    export type MeasurementScore<T> = "Unmeasured" | "UnmeasurablePoor" | T | "UnmeasurableRich";
    export const calculateMeasurementScore = <T>(a: MeasurementScore<T>, b: MeasurementScore<T>, calculate: (a: T, b: T) => T): MeasurementScore<T> =>
    {
        for(var i in [ "Unmeasured", "UnmeasurablePoor", "UnmeasurableRich", ])
        {
            if (a === i || b === i)
            {
                return i;
            }
        }
        return calculate(a as T, b as T);
    };
    export interface Result
    {
        screenResolution: MeasurementScore<{ width: number, height: number, colorDepth: number }>;
        refreshRate: MeasurementScore<number>;
        linesCalculationScore: MeasurementScore<number>; // 非表示状態で１秒間に計算可能なレイヤーの総数( Triline )
        spotCalculationScore: MeasurementScore<number>; // 非表示状態で１秒間に計算可能なレイヤーの総数( Tetraspot )
        totalCalculationScore: MeasurementScore<number>; // (linesCalculationScore + spotCalculationScore) /2
        linesRenderingScorePerPixel: MeasurementScore<number>; // 計算時間を除外した1000x1000ピクセル状態で１秒間に描画可能なレイヤーの総数( Triline )
        spotsRenderingScorePerPixel: MeasurementScore<number>; // 計算時間を除外した1000x1000ピクセル状態で１秒間に描画可能なレイヤーの総数( Tetraspot )
        totalRenderingScore: MeasurementScore<number>; // (linesRenderingScorePerPixel + spotsRenderingScorePerPixel) /2
        totalScore: MeasurementScore<number>; // totalCalculationScore + totalRenderingScore
    }
    export const getUnmeasuredReslult = (): Result =>
    ({
        screenResolution: "Unmeasured",
        refreshRate: "Unmeasured",
        linesCalculationScore: "Unmeasured",
        spotCalculationScore: "Unmeasured",
        totalCalculationScore: "Unmeasured",
        linesRenderingScorePerPixel: "Unmeasured",
        spotsRenderingScorePerPixel: "Unmeasured",
        totalRenderingScore: "Unmeasured",
        totalScore: "Unmeasured",
    });
    export const measureScreenResolution = () =>
    ({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        colorDepth: window.screen.colorDepth,
    });
    const setProgressBarSize = (size: number) =>
        Library.UI.cullOrBreed(UI.benchmarkProgressBar, { tag: "div", className: "progress-block", }, size);
    const setProgressBarProgress = (progress: number) =>
        Array.from(UI.benchmarkProgressBar.children).forEach
        (
            (i, ix) =>
            {
                i.classList.toggle("on", ix < progress);
                i.classList.toggle("now", ix === progress);
            }
        );
    export interface MeasurementPhaseBase
    {
        name: Library.Locale.Label;
        start: (measure: Measurement, now: number) => void;
        step: (measure: Measurement, now: number) => void;
    }
    export class ScreenResolutionMeasurementPhase implements MeasurementPhaseBase
    {
        name = "benchmark-phase-screen-resolution" as const;
        start = (_measure: Measurement, now: number) =>
        {
            this.startAt = now;
        };
        step = (measure: Measurement, now: number) =>
        {
            if (this.startAt +config.benchmark.screenResolutionWait <= now)
            {
                measure.result.screenResolution = measureScreenResolution();
                measure.next();
            }
        };
        startAt = 0;
    }
    export class RefreshRateMeasurementPhase implements MeasurementPhaseBase
    {
        name = "benchmark-phase-refresh-rate" as const;
        start = (_measure: Measurement, now: number) =>
        {
            this.startAt = now;
            this.fpsTotal = 0;
            this.fpsCount = 0;
        };
        step = (measure: Measurement, now: number) =>
        {
            this.fpsTotal += Fps.currentNowFps.fps;
            ++this.fpsCount;
            if (this.startAt + config.benchmark.refreshRateWait <= now)
            {
                measure.result.refreshRate = this.fpsTotal / this.fpsCount;
                measure.next();
            }
        };
        startAt = 0;
        fpsTotal: number = 0;
        fpsCount: number = 0;
    }
    export class CalculationScoreMeasurementPhase implements MeasurementPhaseBase
    {
        patternIndex = 0;
        layers = 1;
        patterns = [ "triline", "trispot" ] as const;
        name = "benchmark-phase-calculation-score" as const;
        start = (measure: Measurement, now: number) =>
        {
            this.patternIndex = 0;
            UI.benchmarkCanvas.classList.toggle("calulate-only", true);
            animator.setColorspace("sRGB");
            animator.setColoring("phi-colors");
            animator.setDiagonalSize(1000);
            animator.setCycleSpan(1000);
            animator.setEasing(true);
            this.startPattern(measure, now);
        };
        startPattern = (_measure: Measurement, now: number) =>
        {
            this.patternStartAt = now;
            animator.setPattern(this.patterns[this.patternIndex]);
            this.startLayers(now, 1);
            animator.startStep(now);
            Fps.reset();
        };
        startLayers = (now: number, layers: number) =>
        {
            this.laysersStartAt = now;
            this.layers = layers;
            animator.setLayers(this.layers);
    }
        step = (measure: Measurement, now: number) =>
        {
            if (this.isNeedAdjustingLayers(now))
            {
                const layers = Math.max(Math.floor((this.layers *Fps.currentMinFps.fps) /30), this.layers +1);
                this.startLayers(now, layers);
            }
            if (this.isNextPattern(now))
            {
                switch(this.patterns[this.patternIndex])
                {
                case "triline":
                    measure.result.linesCalculationScore = this.calculationScore();
                    break;
                case "trispot":
                    measure.result.spotCalculationScore = this.calculationScore();
                    break;
                }
                ++this.patternIndex;
                if (this.isEnd())
                {
                    measure.result.totalCalculationScore = calculateMeasurementScore
                    (
                        measure.result.linesCalculationScore,
                        measure.result.spotCalculationScore,
                        (a, b) => (a +b) /2
                    );
                    measure.next();
                }
                else
                {
                    this.startPattern(measure, now);
                }
            }
            animator.step(now);
        };
        laysersStartAt = 0;
        patternStartAt = 0;
        isStable = (now: number) =>
            Fps.isValid &&
            this.patternStartAt +500 < now;
        isNeedAdjustingLayers = (now: number) =>
            this.isStable(now) &&
            this.laysersStartAt +100 < now &&
            30 <= Fps.averageFps;
        isNextPattern = (now: number) =>
            this.isStable(now) &&
            this.laysersStartAt +1000 < now;
        isEnd = () =>
            this.patterns.length <= this.patternIndex;
        calculationScore = () =>
            Fps.averageFps *this.layers;
    }
    export class RenderingScoreMeasurementPhase implements MeasurementPhaseBase
    {
        name = "benchmark-phase-rendering-score" as const;
        start = (_measure: Measurement, now: number) =>
        {
            this.startAt = now;
            UI.benchmarkCanvas.classList.toggle("calulate-only", false);
        };
        step = (measure: Measurement, now: number) =>
        {
            if (this.startAt + 1000 <= now)
            {
                measure.next();
            }
        };
        startAt = 0;
    }
    const phases: MeasurementPhaseBase[] =
    [
        new ScreenResolutionMeasurementPhase(),
        new RefreshRateMeasurementPhase(),
        new CalculationScoreMeasurementPhase(),
        new RenderingScoreMeasurementPhase(),
    ];
    export class Measurement
    {
        result: Result = getUnmeasuredReslult();
        phase: number = 0;
        currentPhase: MeasurementPhaseBase | null = null;
        constructor(public canvas: HTMLDivElement)
            { };
        start = () =>
        {
            setProgressBarSize(phases.length);
            setProgressBarProgress(this.phase = 0);
            UI.benchmarkPhase.textContent = Library.Locale.map("benchmark-phase-preparation");
            this.currentPhase = null;
            this.result = getUnmeasuredReslult();
        };
        step = (now: number) =>
        {
            if (this.currentPhase !== phases[this.phase])
            {
                this.currentPhase = phases[this.phase];
                UI.benchmarkPhase.textContent = Library.Locale.map(this.currentPhase.name);
                this.currentPhase?.start(this, now);
            }
            phases[this.phase].step(this, now);
        };
        next = () =>
        {
            setProgressBarProgress(++this.phase);
        };
        isEnd = () =>
            phases.length <= this.phase;
        end = () =>
        {
            UI.benchmarkPhase.textContent = Library.Locale.map("benchmark-phase-finished");
            console.log("📈 benchmark", this.result);
        }
    }
}
