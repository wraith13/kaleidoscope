export namespace Url
{
    export const parseParameter = (url: string): Record<string, string> =>
    {
        const result: Record<string, string> = {};
        const urlObj = new URL(url);
        const params = urlObj.searchParams;
        params.forEach
        (
            (value, key) => result[key] = value
        );
        return result;
    }
    export const update = (params: Record<string, string>): void =>
    {
        const url = new URL(window.location.href);
        for (const [ key, value ] of Object.entries(params))
        {
            url.searchParams.set(key, value);
        }
        window.history.replaceState({}, "", url.toString());
    }
    export const addParameter = (params: Record<string, string>, key: string, value: string): Record<string, string> =>
    {
        params[key] = value;
        return params;
    }
    export const applyParam = (key: string, value: string): void =>
        update(addParameter(parseParameter(window.location.href), key, value));
}
