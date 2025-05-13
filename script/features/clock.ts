import { Library } from "../library";
import { UI } from "../ui";
export namespace Clock
{
    export const makeDate = (): string =>
        new Date().toLocaleDateString
        (
            undefined,
            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        );
    export const makeTime = (): string =>
        new Date().toLocaleTimeString();
    export const update = (_local: string): void =>
    {
        Library.UI.setTextContent(UI.date, makeDate());
        Library.UI.setTextContent(UI.time, makeTime());
    };
}
