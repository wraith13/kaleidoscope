import { Array as ToolsArray } from "@tools/array";
import localeDe from "@resource/lang.de.json";
import localeEn from "@resource/lang.en.json";
import localeEs from "@resource/lang.es.json";
import localeJa from "@resource/lang.ja.json";
export namespace Locale
{
    export const master =
    {
        de: localeDe,
        en: localeEn,
        es: localeEs,
        ja: localeJa,
    };
    export type Label = (keyof (typeof master[keyof typeof master])) | "";
    export type Language = keyof typeof master;
    const supportedLangs = Object.keys(master) as Language[];
    //const systemLang = navigator.language.split("-")[0] as Language;
    const systemLang = navigator.language.toLowerCase();
    const getSegments = (text: string, separator: string, segments: number): string =>
        text.split(separator).slice(0, segments).join(separator);
    const getMatchLang = (lang: string): Language =>
        ToolsArray.lookupValue(supportedLangs, getSegments(lang, "-", 2) as Language) ??
        ToolsArray.lookupValue(supportedLangs, getSegments(lang, "-", 1) as Language) ??
        "en";
    const defaultLang: Language = getMatchLang(systemLang);
    let lang: Language = defaultLang;
    export const getLocale = () => lang;
    export const setLocale = (locale?: Language | "Auto") =>
    {
        switch(locale)
        {
        case undefined:
        case "Auto":
            lang = defaultLang;
            break;
        default:
            lang = locale;
            break;
        }
    };
    export const map = (key: Label, l?: Language) =>
        "" === key ? "" : master[l ?? lang][key];
    export const getLocaleList = (): (Language | "Auto")[] =>
        ["Auto", ...supportedLangs] as (Language | "Auto")[];
}
