import { Library } from "../library";
import { UI } from "../ui";
export namespace Clock
{
    export const makeDate = (local: string): string =>
        new Date().toLocaleDateString(local);
    export const makeTime = (local: string): string =>
        new Date().toLocaleTimeString
        (
            local,
            {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }
        );
    export const update = (local: string): void =>
    {
        Library.UI.setTextContent(UI.date, makeDate(local));
        Library.UI.setTextContent(UI.time, makeTime(local));
    };
}
