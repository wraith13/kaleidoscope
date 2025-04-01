import { Library } from "@library";
import { UI } from "../ui";
import { Fps } from "./fps";
export namespace Benchmark
{
    export type MeasurementScore<T> = "Unmeasured" | "UnmeasurablePoor" | T | "UnmeasurableRich";
    export interface Result
    {
        screenResolution: MeasurementScore<{ width: number, height: number, colorDepth: number }>;
        refreshRate: MeasurementScore<number>;
        linesCalculationScore: MeasurementScore<number>; // 0x0ピクセル状態で１秒間に計算可能なレイヤーの総数( Triline )
        spotCalculationScore: MeasurementScore<number>; // 0x0ピクセル状態で１秒間に計算可能なレイヤーの総数( Tetraspot )
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
    {
        Array.from(UI.benchmarkProgressBar.children).forEach((i, ix) => i.classList.toggle("on", ix < progress));
        UI.benchmarkPhase.textContent = Library.Locale.map(phases[progress]?.name ?? "benchmark-phase-finished");
    }
    export interface MeasurePhaseBase
    {
        name: Library.Locale.Label;
        start: (measure: Measure, now: number) => void;
        step: (measure: Measure, now: number) => void;
    }
    export class screenResolutionMeasurePhase implements MeasurePhaseBase
    {
        name = "benchmark-phase-screen-resolution" as const;
        start = (_measure: Measure, now: number) =>
        {
            this.startAt = now;
        };
        step = (measure: Measure, now: number) =>
        {
            if (this.startAt +1000 <= now)
            {
                measure.result.screenResolution = measureScreenResolution();
                measure.next();
            }
        };
        startAt = 0;
    }
    export class RefreshRateMeasurePhase implements MeasurePhaseBase
    {
        name = "benchmark-phase-refresh-rate" as const;
        start = (_measure: Measure, now: number) =>
        {
            this.startAt = now;
            this.fpsTotal = 0;
            this.fpsCount = 0;
        };
        step = (measure: Measure, now: number) =>
        {
            this.fpsTotal += Fps.currentNowFps.fps;
            ++this.fpsCount;
            if (this.startAt + 2500 <= now)
            {
                measure.result.refreshRate = this.fpsTotal / this.fpsCount;
                measure.next();
            }
        };
        startAt = 0;
        fpsTotal: number = 0;
        fpsCount: number = 0;
    }
    const phases: MeasurePhaseBase[] =
    [
        new screenResolutionMeasurePhase(),
        new RefreshRateMeasurePhase(),
    ];
    export class Measure
    {
        result: Result = getUnmeasuredReslult();
        phase: number = 0;
        currentPhase: MeasurePhaseBase | null = null;
        constructor(public canvas: HTMLDivElement)
            { };
        start = () =>
        {
            setProgressBarSize(phases.length);
            setProgressBarProgress(this.phase = 0);
            this.currentPhase = null;
            this.result = getUnmeasuredReslult();
        };
        step = (now: number) =>
        {
            if (this.currentPhase !== phases[this.phase])
            {
                this.currentPhase = phases[this.phase];
                this.currentPhase.start(this, now);
            }
            phases[this.phase].step(this, now);
        };
        next = () =>
        {
            setProgressBarProgress(++this.phase);
        };
        isEnd = () =>
            phases.length <= this.phase;
    }
}
