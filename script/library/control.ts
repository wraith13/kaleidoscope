import { UI } from "./ui";
export namespace Control
{
    const makeSelectOption = (value: string, text: string) =>
    {
        const option = document.createElement("option");
        option.value = value;
        option.innerText = text;
        return option;
    };
    export interface ArgumentsBaseDom<T extends HTMLElement>
    {
        dom: T;
    }
    export interface ArgumentsBaseId
    {
        id: string;
    }
    export type ArgumentsBase<T extends HTMLElement> = ArgumentsBaseDom<T> | ArgumentsBaseId;
    export const getDom = <T extends HTMLElement>(data: ArgumentsBase<T>): T =>
    {
        const result ="dom" in data ?
            data.dom:
            <T>document.getElementById(data.id);
        if (null == result || undefined === result)
        {
            console.error("🦋 FIXME: Contorl.getDom.NotExistsDom", data);
        }
        else
        if ( ! (result instanceof HTMLElement))
        {
            console.error("🦋 FIXME: Contorl.getDom.InvalidDom", data, result);
        }
        return result;
    }
    export const eventLog = <T extends HTMLElement>(control: { data: ArgumentsBase<T> }, event: Event, message: string) =>
    {
        if ("id" in control.data)
        {
            console.log(message, control.data.id, event, control);
        }
        else
        {
            console.log(message, event, control);
        }
    }
    export interface ButtonArgumentsBase<T extends HTMLElement>
    {
        click: (event: Event, select: Button<T>) => unknown;
    }
    export type ButtonArguments<T extends HTMLElement = HTMLButtonElement> = ArgumentsBase<T> & ButtonArgumentsBase<T>;
    export class Button<T extends HTMLElement>
    {
        public dom: T;
        constructor(public data: ButtonArguments<T>)
        {
            this.dom = getDom(data);
            this.dom.addEventListener
            (
                "click",
                event =>
                {
                    eventLog(this, event, "👆 Button.Click:");
                    this.data.click(event, this);
                }
            );
        }
    }
    export interface SelectArgumentsBase<T>
    {
        enum: T[];
        default: T;
    }
    export interface SelectOptions<T>
    {
        makeLabel?: (value: T) => string;
        change?: (event: Event | null, select: Select<T>) => unknown;
        preventOnChangeWhenNew?: boolean;
    }
    export const preventOnChange = "preventOnChange" as const;
    export type SelectArguments<T> = ArgumentsBase<HTMLSelectElement> & SelectArgumentsBase<T>;
    export class Select<T>
    {
        public dom: HTMLSelectElement;
        constructor(public data: SelectArguments<T>, public options?: SelectOptions<T>)
        {
            this.dom = getDom(data);
            if ( ! (this.dom instanceof HTMLSelectElement))
            {
                console.error("🦋 FIXME: Contorl.Select.InvalidDom", data, this.dom);
            }
            this.reloadOptions(this.data.default);
            this.dom.addEventListener
            (
                "change", event =>
                {
                    eventLog(this, event, "👆 Select.Change:");
                    this.options?.change?.(event, this);
                }
            );
        }
        reloadOptions = (value?: T) =>
        {
            const oldValue = value ?? (this.get() as T);
            UI.replaceChildren
            (
                this.dom,
                this.data.enum.map(i => makeSelectOption(`${i}`, this.options?.makeLabel?.(i) ?? `${i}`))
            );
            this.switch(oldValue, preventOnChange);
        };
        switch = (valueOrDirection: T | boolean, preventOnChange?: "preventOnChange") =>
        {
            if ("boolean" === typeof valueOrDirection)
            {
                const options = Array.from(this.dom.getElementsByTagName("option"));
                const optionValues = options.map(i => i.value);
                const index = optionValues.indexOf(this.dom.value);
                const nextIndex = index +(valueOrDirection ? -1: 1);
                const nextValue = optionValues[nextIndex];
                if (undefined !== nextValue)
                {
                    this.dom.value = nextValue;
                }
            }
            else
            {
                this.dom.value = `${valueOrDirection}`;
            }
            if (undefined === preventOnChange)
            {
                this.options?.change?.(null, this);
            }
        };
        get = () => this.dom.value;
    }
    export interface CheckboxArgumentsBase
    {
        default?: boolean;
    }
    export interface CheckboxOptions
    {
        change?: (event: Event | null, checked: Checkbox) => unknown;
        preventOnChangeWhenNew?: boolean;
    }
    export type CheckboxArguments = ArgumentsBase<HTMLInputElement> & CheckboxArgumentsBase;
    export class Checkbox
    {
        public dom: HTMLInputElement;
        constructor(public data: CheckboxArguments, public options?: CheckboxOptions)
        {
            this.dom = getDom(data);
            if ( ! (this.dom instanceof HTMLInputElement) || "checkbox" !== this.dom.type.toLowerCase())
            {
                console.error("🦋 FIXME: Contorl.Checkbox.InvalidDom", data, this.dom);
            }
            if (undefined !== this.data.default)
            {
                this.toggle(this.data.default, [preventOnChange][false !== this.options?.preventOnChangeWhenNew ?0:1]);
            }
            this.dom.addEventListener
            (
                "change",
                event =>
                {
                    eventLog(this, event, "👆 Checkbox.Change:");
                    this.options?.change?.(event, this);
                }
            );
        }
        toggle = (checked?: boolean, preventOnChange?: "preventOnChange") =>
        {
            this.dom.checked = checked ?? ! this.get();
            if (undefined === preventOnChange)
            {
                this.options?.change?.(null, this);
            }
        };
        get = () => this.dom.checked;
    }
}