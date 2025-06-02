import { Library } from "@library";
import { UI } from "./ui";
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
        default?: Library.Locale.Label;
    }
    export interface IntegerLoadStatus
    {
        id: string;
        type: "integer";
        direction: "ascending" | "descending";
        mapping:
        {
            number: number;
            label: Library.Locale.Label;
        }[];
        default?: Library.Locale.Label;
    }
    export const getBoolLabel = (config: BooleanLoadStatus) =>
        (i: boolean) : Library.Locale.Label =>
            i ? config.mapping["true"]: config.mapping["false"];
    export const getEnumLabel = (config: EnumLoadStatus) =>
        (i: string) : Library.Locale.Label =>
            config.mapping[i] ?? config.default ?? "";
    export const getIntegerLabel = (config: IntegerLoadStatus) =>
        (i: string) : Library.Locale.Label =>
        {
            const value = parseInt(i);
            return config.direction === "ascending" ?
                config.mapping.find((e) => value <= e.number)?.label ?? config.default ?? "":
                config.mapping.find((e) => e.number <= value)?.label ?? config.default ?? "";
        }
    export const setEnumLabel = (config: EnumLoadStatus, i: string) =>
        UI.setAndUpdateLabel(Library.UI.getElementById("span", config.id), getEnumLabel(config)(i));
    export const setBoolLabel = (config: BooleanLoadStatus, i: boolean) =>
        UI.setAndUpdateLabel(Library.UI.getElementById("span", config.id), getBoolLabel(config)(i));
    export const setIntegerLabel = (config: IntegerLoadStatus, i: string) =>
        UI.setAndUpdateLabel(Library.UI.getElementById("span", config.id), getIntegerLabel(config)(i));
}
