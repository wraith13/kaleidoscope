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
            shuffleAnimation();
            break;
        case "twitter-card":
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
}
