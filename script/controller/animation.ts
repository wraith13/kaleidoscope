import { Features } from "@features";
import { Library } from "@library";
import { Base } from "./base";
import { UI } from "../ui";
import config from "@resource/config.json";
export namespace Animation
{
    export const animator = new Features.Animation.Animator(UI.canvas, Math.random);
    export const isInAnimation = () =>
        Base.isInMode("animation");
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
    export const isAnimationStepTiming = (now: number) =>
        ! UI.lowLoadModeCheckbox.get() ||
        5 < animator.getNowDifference(now) *animator.getStepDifference(now) /animator.layers.length ||
        3000 < animator.getNowDifference(now);
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
                if (isAnimationStepTiming(now))
                {
                    animator.step(now);
                }
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
    export const updateFps = () =>
    {
        if (UI.showFps.get())
        {
            Library.UI.setTextContent(UI.fpsDisplay, Features.Fps.getText());
        }
    }
}
