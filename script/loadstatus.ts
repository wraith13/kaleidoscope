import { Library } from "@library";
import loadStatusJson from "@resource/loadstatus.json";
export namespace LoadStatus
{
    export interface BooleanLoadStatus
    {
        id: string;
        type: "boolean";
        mapping:
        {
            "true": Library.Locale.Label;
            "false": Library.Locale.Label;
        };
    }
    export interface EnumLoadStatus
    {
        id: string;
        type: "enum";
        mapping:
        {
            [key: string]: Library.Locale.Label;
        };
        default: Library.Locale.Label;
    }
    export const getBoolLabel = (config: BooleanLoadStatus) =>
        (i: boolean) : Library.Locale.Label =>
            i ? config.mapping["true"]: config.mapping["false"];
    export const getEnumLabel = (config: EnumLoadStatus) =>
        (i: string) : Library.Locale.Label =>
            config.mapping[i] ?? config.default;
    export const getColorspaceLabel = getEnumLabel(loadStatusJson.colorspace as EnumLoadStatus);
    export const getPatternLabel = getEnumLabel(loadStatusJson.pattern as EnumLoadStatus);
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
    export const getWithFullscreenLabel = getBoolLabel(loadStatusJson.withFullscreen as BooleanLoadStatus);
    export const getShowFpsLabel = getBoolLabel(loadStatusJson.showFps as BooleanLoadStatus);
    export const getShowClockLabel = getBoolLabel(loadStatusJson.showClock as BooleanLoadStatus);
}
