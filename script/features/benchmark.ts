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
    export const measureScreenResolution = () =>
    ({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        colorDepth: window.screen.colorDepth,
    });
    export class Measure
    {
        
    }
}
