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
    export const calculateMeasurementScore = <A, B, R>(a: MeasurementScore<A>, b: MeasurementScore<B>, calculate: (a: A, b: B) => R): MeasurementScore<R> =>
    {
        for(var i in [ "Unmeasured", "UnmeasurablePoor", "UnmeasurableRich", ])
        {
            if (a === i || b === i)
            {
                return i;
            }
        }
        return calculate(a as A, b as B);
    };
    export const getMeasurementScoreValue = <T>(score: MeasurementScore<T>): T | undefined =>
        [ "Unmeasured", "UnmeasurablePoor", "UnmeasurableRich", ].includes(score as string) ?
        undefined :
        score as T;
    export interface Result
    {
        screenResolution: MeasurementScore<{ width: number; height: number; colorDepth: number; devicePixelRatio: number; }>;
        refreshRate: MeasurementScore<number>;
        linesCalculationScore: MeasurementScore<number>; // 非表示状態で１秒間に計算可能なレイヤーの総数( Triline )
        spotCalculationScore: MeasurementScore<number>; // 非表示状態で１秒間に計算可能なレイヤーの総数( Tetraspot )
        totalCalculationScore: MeasurementScore<number>; // (linesCalculationScore + spotCalculationScore) /2
        linesRenderingScorePerFullHd: MeasurementScore<number>; // Full HD (1920x1080) のピクセル数で１秒間に描画可能なレイヤーの総数( Triline )
        spotsRenderingScorePerFullHd: MeasurementScore<number>; // Full HD (1920x1080) のピクセル数で１秒間に描画可能なレイヤーの総数( Tetraspot )
        totalRenderingScore: MeasurementScore<number>; // (linesRenderingScorePerPixel + spotsRenderingScorePerPixel) /2
        totalScore: MeasurementScore<number>; // totalRenderingScore * screenResolution.width * screenResolution.height / (1920 *1080)
    }
    export const getUnmeasuredReslult = (): Result =>
    ({
        screenResolution: "Unmeasured",
        refreshRate: "Unmeasured",
        linesCalculationScore: "Unmeasured",
        spotCalculationScore: "Unmeasured",
        totalCalculationScore: "Unmeasured",
        linesRenderingScorePerFullHd: "Unmeasured",
        spotsRenderingScorePerFullHd: "Unmeasured",
        totalRenderingScore: "Unmeasured",
        totalScore: "Unmeasured",
    });
    export const measureScreenResolution = () =>
    ({
        width: screen.width,
        height: screen.height,
        colorDepth: window.screen.colorDepth,
        devicePixelRatio: window.devicePixelRatio ?? 1.0,
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
            UI.benchmarkDescription.textContent = JSON.stringify(measureScreenResolution());
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
            UI.benchmarkDescription.textContent = `Refesh Rate: ${Fps.currentNowFps.fps.toFixed(2)} fps`;
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
    export class ScoreMeasurementPhaseBase
    {
        patternIndex = 0;
        layers = 1;
        patterns = [ "triline", "trispot" ] as const;
        halfRefreshRate = 30;
        constructor
        (
            public calculateOnly: boolean,
            public calculateScore: (measure: Measurement, pattern: ScoreMeasurementPhaseBase["patterns"][number]) => unknown,
            public calculateTotalScore: (measure: Measurement) => unknown
        )
        {
        }
        start = (measure: Measurement, now: number) =>
        {
            this.halfRefreshRate = getMeasurementScoreValue(measure.result.refreshRate) ?? 30;
            this.patternIndex = 0;
            document.body.classList.toggle("benchmark-rendering", ! this.calculateOnly);
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
            UI.benchmarkDescription.textContent = `score: ${(Fps.currentNowFps.fps *this.layers).toFixed(2)}`;
            if (this.isNeedAdjustingLayers(now))
            {
                const layers = Math.max(Math.floor((this.layers *Fps.currentMinFps.fps) /this.halfRefreshRate), this.layers +1);
                this.startLayers(now, layers);
            }
            if (this.isNextPattern(now))
            {
                this.calculateScore(measure, this.patterns[this.patternIndex]);
                ++this.patternIndex;
                if (this.isEnd())
                {
                    this.calculateTotalScore(measure);
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
            this.patternStartAt +config.benchmark.stableWait < now;
        isNeedAdjustingLayers = (now: number) =>
            this.isStable(now) &&
            this.laysersStartAt +config.benchmark.adjustLayersWait < now &&
            30 <= Fps.averageFps;
        isNextPattern = (now: number) =>
            this.isStable(now) &&
            this.laysersStartAt +config.benchmark.nextPatternWait < now;
        isEnd = () =>
            this.patterns.length <= this.patternIndex;
        calculationScore = () =>
            Fps.averageFps *this.layers;
    }
    export class CalculationScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase
    {
        name = "benchmark-phase-calculation-score" as const;
        constructor()
        {
            super
            (
                true,
                (measure, pattern) =>
                {
                    switch(pattern)
                    {
                    case "triline":
                        measure.result.linesCalculationScore = this.calculationScore();
                        break;
                    case "trispot":
                        measure.result.spotCalculationScore = this.calculationScore();
                        break;
                    }
                },
                (measure) =>
                {
                    measure.result.totalCalculationScore = calculateMeasurementScore
                    (
                        measure.result.linesCalculationScore,
                        measure.result.spotCalculationScore,
                        (a, b) => (a +b) /2
                    );
                }
            );
        }
    }
    export class RenderingScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase
    {
        name = "benchmark-phase-rendering-score" as const;
        constructor()
        {
            super
            (
                false,
                (measure, pattern) =>
                {
                    switch(pattern)
                    {
                    case "triline":
                        measure.result.linesRenderingScorePerFullHd =
                            this.calculationScore() *this.calculateArea();
                        break;
                    case "trispot":
                        measure.result.spotsRenderingScorePerFullHd =
                            this.calculationScore() *this.calculateArea();
                        break;
                    }
                },
                (measure) =>
                {
                    measure.result.totalRenderingScore = calculateMeasurementScore
                    (
                        measure.result.linesRenderingScorePerFullHd,
                        measure.result.spotsRenderingScorePerFullHd,
                        (a, b) => (a +b) /2
                    );
                }
            );
        }
        calculateArea = () =>
            (
                (UI.benchmarkCanvas.clientWidth *(window.devicePixelRatio ?? 1.0))
                *(UI.benchmarkCanvas.clientHeight *(window.devicePixelRatio ?? 1.0))
            )
            /config.benchmark.pixelUnit;
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
            this.result.totalScore = calculateMeasurementScore
            (
                this.result.screenResolution,
                this.result.totalRenderingScore,
                (a, b) => b /(((a.width *a.devicePixelRatio) *(a.height *a.devicePixelRatio)) /config.benchmark.pixelUnit)
            );
            console.log("📈 benchmark", this.result);
        }
    }
}
