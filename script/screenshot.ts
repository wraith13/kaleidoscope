import { Controller } from "@controller";
import { UI } from "./ui";
export namespace Screenshot
{
    export const initialize = (params: Record<string, string>): void =>
    {
        const screenshot = params["screenshot"];
        switch (screenshot)
        {
        case "favicon":
            fixCanvasSize("1024px", "1024px");
            shuffleAnimation();
            break;
        case "twitter-card":
            fixCanvasSize("1200px", "630px");
            shuffleAnimation();
            break;
        case "black":
            UI.screenBody.classList.add("black");
            break;
        case "sample":
            shuffleAnimation();
            break;
        }
    };
    export const shuffleAnimation = (): void =>
    {
        Controller.Animation.shuffleAnimation();
    }
    export const fixCanvasSize = (width: string, height: string): void =>
    {
        [ "min-width", "max-width", ].forEach
        (
            i => UI.canvas.style.setProperty(i, width)
        );
        [ "min-height", "max-height", ].forEach
        (
            i => UI.canvas.style.setProperty(i, height)
        );
        Controller.Animation.animator.updateDiagonalSize();
    }
}
