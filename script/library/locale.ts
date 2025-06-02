import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
import localeEs from "@resource/lang.es.json";
export namespace Locale
{
    export const master =
    {
        en: localeEn,
        ja: localeJa,
        es: localeEs,
    };
    export type Label = (keyof (typeof master[keyof typeof master])) | "";
    export type Language = keyof typeof master;
    const supportedLangs = ["ja", "en", "es"] as const;
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
