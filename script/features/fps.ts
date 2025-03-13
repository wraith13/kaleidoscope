export namespace Fps
{
    interface FpsHistoryEntry
    {
        fps: number;
        now: number;
        text: string;
    }
    const fpsWindow = 1000;
    let frameTimings: number[] = [];
    let fpsHistory: FpsHistoryEntry[] = [];
    export let currentMaxFps: FpsHistoryEntry;
    export let currentNowFps: FpsHistoryEntry;
    export let currentMinFps: FpsHistoryEntry;
    export let fuseFps: number;
    export let isValid: boolean;
    export const reset = () =>
    {
        isValid = false;
        frameTimings = [];
        fpsHistory = [];
    };
    export const step = (now: number) =>
    {
        frameTimings.push(now);
        isValid = 2 <= frameTimings.length;
        if (isValid)
        {
            while (2 < frameTimings.length && fpsWindow < now - frameTimings[0])
            {
                frameTimings.shift();
            }
            const timeSpan = Math.max(now - frameTimings[0], 0.001); // max for avoid 0 div
            const frameCount = frameTimings.length - 1;
            const fps = (frameCount * 1000) / timeSpan;
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
    };
    const makeFpsText = (fps: number) =>
        `${fps.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 2, minimumFractionDigits: 2, })} FPS`;
    export const getText = () =>
        isValid ? currentMaxFps.text +"(Max)\n" + currentNowFps.text + "(Now)\n" +currentMinFps.text +"(Min)": "";
    export const isUnderFuseFps = () => isValid && currentMaxFps.fps < fuseFps;
}
