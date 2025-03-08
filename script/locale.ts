import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
export namespace Locale
{
    const lang = "ja" === navigator.language.substring(0, 2) ? "ja": "en";
    export const master =
    {
        en: localeEn,
        ja: localeJa,
    };
    export type KeyType =
        keyof typeof localeEn &
        keyof typeof localeJa;
    export type Type = keyof typeof master;
    export const map = (key: KeyType) => master[lang][key];
}
