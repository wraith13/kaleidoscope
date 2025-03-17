import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
export namespace Locale
{
    export const master =
    {
        en: localeEn,
        ja: localeJa,
    };
    export type KeyType =
        keyof typeof localeEn &
        keyof typeof localeJa;
    export type Type = keyof typeof master;
    const supportedLangs = ["ja", "en"] as const;
    const systemLang = navigator.language.split("-")[0] as Type;
    const defaultLang: Type = supportedLangs.includes(systemLang) ? systemLang: "en";
    let lang: Type = defaultLang;
    export const getLocale = () => lang;
    export const setLocale = (locale?: Type | "Auto") =>
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
    }
    export const map = (key: KeyType, l?: Type) => master[l ?? lang][key];
}
