export namespace Fps
{
    interface FpsHistoryEntry
    {
        fps: number;
        now: number;
        text: string;
    }
    const fpsCalcUnit = 5;
    let frameTimings: number[] = [];
    let fpsHistory: FpsHistoryEntry[] = [];
    export let currentMaxFps: FpsHistoryEntry;
    export let currentNowFps: FpsHistoryEntry;
    export let currentMinFps: FpsHistoryEntry;
    export let fuseFps: number;
    export const reset = () =>
    {
        frameTimings = [];
        fpsHistory = [];
    };
    export const step = (now: number) =>
    {
        frameTimings.push(now);
        if (fpsCalcUnit <= frameTimings.length)
        {
            const first = frameTimings.shift() ?? 0;
            const fps = (fpsCalcUnit *1000.0) /(now -first);
            currentNowFps =
            {
                fps,
                now,
                text: makeFpsText(fps),
            };
            const expiredAt = now -1000;
            while(0 < fpsHistory.length && fpsHistory[0].now < expiredAt)
            {
                fpsHistory.shift();
            }
            fpsHistory.push(currentNowFps);
            currentMaxFps = currentNowFps;
            currentMinFps = currentNowFps;
            fpsHistory.forEach
            (
                i =>
                {
                    if (currentMaxFps.fps < i.fps)
                    {
                        currentMaxFps = i;
                    }
                    if (i.fps < currentMinFps.fps)
                    {
                        currentMinFps = i;
                    }
                }
            );
            isValid = true;
            if (isUnderFuseFps())
            {
                console.error
                (
                    "❌ UnderFuseFps:",
                    {
                        fuseFps: Fps.fuseFps,
                        maxFps: Fps.currentMaxFps.fps,
                        nowFps: Fps.currentMaxFps.fps,
                        minFps: Fps.currentMinFps.fps,
                    }
                );
            }
        }
        else
        {
            isValid = false;
        }
    };
    export let isValid: boolean;
    const makeFpsText = (fps: number) =>
        `${fps.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 2, minimumFractionDigits: 2, })} FPS`;
    export const getText = () =>
        isValid ? currentMaxFps.text +"(Max)\n" + currentNowFps.text + "(Now)\n" +currentMinFps.text +"(Min)": "";
    export const isUnderFuseFps = () => isValid && currentMaxFps.fps < fuseFps;
}
