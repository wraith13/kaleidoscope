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
    export const fullscreenEnabled = document.fullscreenEnabled || (<any>document).webkitFullscreenEnabled;
    export const requestFullscreen = (dom: Element = document.body) =>
    {
        if (dom.requestFullscreen)
        {
            dom.requestFullscreen();
        }
        else
        if ("webkitRequestFullscreen" in dom)
        {
            (<any>dom).webkitRequestFullscreen();
        }
    };
    export const exitFullscreen = () =>
    {
        if (document.fullscreenElement || ("webkitFullscreenElement" in document && null !== document.webkitFullscreenElement))
        {
            if (document.exitFullscreen)
            {
                document.exitFullscreen();
            }
            else
            if ("webkitCancelFullScreen" in document)
            {
                (<any>document).webkitCancelFullScreen();
            }
        }
    };

    export type Attributes = Record<string, string | number | boolean>;
    export type Styles = Partial<CSSStyleDeclaration>;

    export type Events =
    {
        [K in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[K]) => void;
    };
    export interface ElementOptions
    {
        text?: string;
        attributes?: Attributes;
        children?: HTMLElement[];
        styles?: Styles;
        events?: Events;
    }
    export type HtmlTag = keyof HTMLElementTagNameMap;
    export const setOptions = <T extends HTMLElement>(element: T, options: ElementOptions = {}): T =>
    {
        const { text, attributes = {}, children = [], styles = {}, events = {} } = options;
        if ("string" === typeof text)
        {
            element.textContent = text;
        }
        Object.entries(attributes).forEach
        (
            ([key, value]) => element.setAttribute(key, String(value))
        );
        Object.entries(styles).forEach
        (
            ([key, value]) => (element.style as any)[key] = value
        );
        Object.entries(events).forEach
        (
            ([event, handler]) => element.addEventListener(event, handler as EventListener)
        );
        children.forEach(child => element.appendChild(child));
        return element;
    };
    export const createElement = <T extends HtmlTag>(tag: T, options: ElementOptions = {}): HTMLElementTagNameMap[T] =>
        setOptions(document.createElement(tag), options);
    export const appendChild = <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, tag: T | HTMLElement, options: ElementOptions = {}): ParentT =>
    {
        parent.appendChild
        (
            tag instanceof Element ?
                setOptions(tag, options):
                createElement(tag, options)
        );
        return parent;
    };
    export const getElementsByClassName = <T extends HtmlTag>(tag: T, className: string): HTMLElementTagNameMap[T][] =>
    {
        const result = <HTMLElementTagNameMap[T][]><unknown>Array.from(document.getElementsByClassName(className));
        result.forEach
        (
            i =>
            {
                if (tag !== i.tagName.toLowerCase())
                {
                    console.error("🦋 FIXME: UI.getElementsByClassName.InvalidDom", className, tag, i);
                }
            }
        );
        return result;
    }
    export const querySelectorAllWithFallback = <T extends HtmlTag>(tag: T, selectorss: string[]): HTMLElementTagNameMap[T][] =>
    {
        var lastError;
        for(var i = 0; i < selectorss.length; ++i)
        {
            try
            {
                const result = <HTMLElementTagNameMap[T][]><unknown>Array.from(document.querySelectorAll(selectorss[i]));
                result.forEach
                (
                    j =>
                    {
                        if (tag !== j.tagName.toLowerCase())
                        {
                            console.error("🦋 FIXME: UI.querySelectorAllWithFallback.InvalidDom", i, tag, j);
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
    export const getElementById = <T extends HtmlTag>(tag: T, id: string): HTMLElementTagNameMap[T] =>
    {
        const result = <HTMLElementTagNameMap[T]><unknown>document.getElementById(id);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: UI.getElementById.NotExistsDom", id);
        }
        else
        if (tag !== result.tagName.toLowerCase())
        {
            console.error("🦋 FIXME: UI.getElementById.InvalidDom", id, tag, result);
        }
        return result;
    };
    export const querySelector = <T extends HtmlTag>(tag: T, selectors: string): HTMLElementTagNameMap[T] =>
    {
        const result = <HTMLElementTagNameMap[T]><unknown>document.querySelector(selectors);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: UI.querySelector.NotExistsDom", selectors);
        }
        else
        if (tag !== result.tagName.toLowerCase())
        {
            console.error("🦋 FIXME: UI.querySelector.InvalidDom", selectors, tag, result);
        }
        return result;
    };
}
