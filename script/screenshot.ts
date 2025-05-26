export namespace Screenshot
{
    export const initialize = (params: Record<string, string>): void =>
    {
        const screenshot = params["screenshot"];
        switch (screenshot)
        {
        case "favicon":
            break;
        case "twitter-card":
            break;
        case "sample":
            break;
        }
    };
}