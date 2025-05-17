import { Library } from "@library";
export namespace LoadStatus
{
    export const getFrameDelayLabel = (i: number): Library.Locale.Label =>
    {
        switch(true)
        {
        case i <= 0:
            return "FullPower";
        case i < 100:
            return "HighLoad";
        case 350 < i:
            return "LowLoad";
        default:
            return "MediumLoad";
        }
    };
    export const getShowFpsLabel = (i: boolean): Library.Locale.Label =>
        i ? "WithLoad": "";
    export const getShowClockLabel = (i: boolean): Library.Locale.Label =>
        i ? "WithLoad": "";
}
