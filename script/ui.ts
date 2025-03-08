import config from "@resource/config.json";
export namespace UI
{
    export const showPickerOnLabel = (label: HTMLLabelElement) =>
    {
        const selectId = label.getAttribute("for");
        if (selectId)
        {
            const select = <HTMLSelectElement>document.getElementById(selectId);
            if (select && "select" === select.tagName.toLowerCase())
            {
                label.addEventListener
                (
                    'click',
                    e =>
                    {
                        e.preventDefault();
                        select.focus();
                        if ("showPicker" in select)
                        {
                            select.showPicker();
                        }
                        else
                        {
                            (<any>select).click();
                        }
                    }
                );
            }
            else
            {
                console.error("🦋 FIXME: UI.showPickerOnLabel.NotFoundSelect", label, select);
            }
        }
        else
        {
            console.error("🦋 FIXME: UI.showPickerOnLabel.NotFoundForAttribute", label);
        }
    };
    export class ToggleClassForWhileTimer
    {
        timer: number | undefined;
        constructor()
        {
            this.timer = undefined;
        }
        start(element: HTMLElement, token: string, span: number)
        {
            if (this.isOn())
            {
                clearTimeout(this.timer);
            }
            element.classList.toggle(token, true);
            this.timer = setTimeout
            (
                () =>
                {
                    if (config.log["ToggleClassForWhileTimer.Timeout"])
                    {
                        console.log("⌛️ ToggleClassForWhileTimer.Timeout", element, token, span);
                    }
                    this.timer = undefined;
                    element.classList.toggle(token, false);
                },
                span
            );
        }
        isOn = () => undefined !== this.timer;
    }
    export const getElementsByClassName = <T extends Element>(type: { new (): T }, className: string): T[] =>
    {
        const result = <T[]><unknown>Array.from(document.getElementsByClassName(className));
        result.forEach
        (
            i =>
            {
                if ( ! (i instanceof type))
                {
                    console.error("🦋 FIXME: UI.getElementsByClassName.InvalidDom", className, type, i);
                }
            }
        );
        return result;
    }
    export const querySelectorAllWithFallback = <T extends Element>(type: { new (): T }, selectorss: string[]): T[] =>
    {
        var lastError;
        for(var i = 0; i < selectorss.length; ++i)
        {
            try
            {
                const result = <T[]><unknown>Array.from(document.querySelectorAll(selectorss[i]));
                result.forEach
                (
                    j =>
                    {
                        if ( ! (j instanceof type))
                        {
                            console.error("🦋 FIXME: UI.querySelectorAllWithFallback.InvalidDom", i, type, j);
                        }
                    }
                );
                return result;
            }
            catch(error)
            {
                lastError = error;
            }
        }
        console.error("🦋 FIXME: querySelectorAllWithFallback.AllQueryFailed", selectorss, lastError);
        return [];
    }
    export const getElementById = <T extends Element>(type: { new (): T }, id: string): T =>
    {
        const result = <T><unknown>document.getElementById(id);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: UI.getElementById.NotExistsDom", id);
        }
        else
        if ( ! (result instanceof type))
        {
            console.error("🦋 FIXME: UI.getElementById.InvalidDom", id, type, result);
        }
        return result;
    };
    export const querySelector = <T extends Element>(type: { new (): T }, selectors: string): T =>
    {
        const result = <T><unknown>document.querySelector(selectors);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: UI.querySelector.NotExistsDom", selectors);
        }
        else
        if ( ! (result instanceof type))
        {
            console.error("🦋 FIXME: UI.querySelector.InvalidDom", selectors, type, result);
        }
        return result;
    };
    export const createElement = <T extends Element>(type: { new (): T }, tag: string): T =>
    {
        const result = <T><unknown>document.createElement(tag);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: UI.createElement.NotExistsDom", tag);
        }
        else
        if ( ! (result instanceof type))
        {
            console.error("🦋 FIXME: UI.createElement.InvalidDom", tag, type, result);
        }
        return result;
    }
}
