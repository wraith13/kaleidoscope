import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
export namespace Locale
{
    export const master =
    {
        en: localeEn,
        ja: localeJa,
    };
    export type Label =
    (
        keyof typeof localeEn &
        keyof typeof localeJa
    ) | "";
    export type Language = keyof typeof master;
    const supportedLangs = ["ja", "en"] as const;
    const systemLang = navigator.language.split("-")[0] as Language;
    const defaultLang: Language = supportedLangs.includes(systemLang) ? systemLang: "en";
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
    }
    export const map = (key: Label, l?: Language) =>
        "" === key ? "" : master[l ?? lang][key];
}
