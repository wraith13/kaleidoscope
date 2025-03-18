import config from "@resource/config.json";
import { TypeGuards } from "@library/type-guards";
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
    export type ElementSource<T extends HtmlTag = any> = CreateElementArguments<T> | HTMLElementTagNameMap[T] | Text | string;
    export interface ElementOptions
    {
        className?: string;
        text?: string;
        attributes?: Attributes;
        children?: ElementSource[];
        styles?: Styles;
        events?: Events;
    }
    export interface CreateElementArguments<T extends HtmlTag> extends ElementOptions
    {
        tag: T;
    }
    export type HtmlTag = keyof HTMLElementTagNameMap;
    export const setOptions = <T extends HTMLElement>(element: T, options: ElementOptions = {}): T =>
    {
        const { className, text, attributes = {}, children = [], styles = {}, events = {} } = options;
        if ("string" === typeof className)
        {
            element.className = className;
        }
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
        children.forEach(child => appendChild(element, child));
        return element;
    };
    export const createElement = <T extends HtmlTag>(element: ElementSource<T>): HTMLElementTagNameMap[T] | Text =>
        "string" === typeof element ? document.createTextNode(element):
        element instanceof Node ? element:
            setOptions(document.createElement(element.tag), element);
    export const removeAllChildren = <ParentT extends HTMLElement>(parent: ParentT): ParentT =>
    {
        Array.from(parent.children).forEach(i => parent.removeChild(i));
        return parent;
    };
    export const appendChild = <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: ElementSource<T>): ParentT =>
    {
        parent.appendChild(createElement(element));
        return parent;
    };
    export const replaceChild = <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: ElementSource<T>): ParentT =>
    {
        removeAllChildren(parent);
        return appendChild(parent, element);
    };
    export const appendChildren = <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: ElementSource<T>[]): ParentT =>
    {
        if ("append" in parent)
        {
console.log("\"append\" in parent", elements);
            parent.append(...elements.map(i => createElement(i)));
        }
        else
        {
console.log("not \"append\" in parent", elements);
            elements.forEach(i => appendChild(parent, i));
        }
        return parent;
    };
    export const replaceChildren = <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: ElementSource<T>[]): ParentT =>
    {
        removeAllChildren(parent);
        return appendChildren(parent, elements);
    };
    export const getElementsByClassName = <T extends HtmlTag>(tag: T, className: string, parent?: Element): HTMLElementTagNameMap[T][] =>
    {
        const result = <HTMLElementTagNameMap[T][]><unknown>Array.from((parent ?? document).getElementsByClassName(className));
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
    export const querySelectorAllWithFallback = <T extends HtmlTag>(tag: T, selectorss: string[], parent?: Element): HTMLElementTagNameMap[T][] =>
    {
        var lastError;
        for(var i = 0; i < selectorss.length; ++i)
        {
            try
            {
                const result = <HTMLElementTagNameMap[T][]><unknown>Array.from((parent ?? document).querySelectorAll(selectorss[i]));
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
        if ( ! TypeGuards.hasValue(result))
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
    export const querySelector = <T extends HtmlTag>(tag: T, selectors: string, parent?: Element): HTMLElementTagNameMap[T] =>
    {
        const result = <HTMLElementTagNameMap[T]><unknown>(parent ?? document).querySelector(selectors);
        if ( ! TypeGuards.hasValue(result))
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
