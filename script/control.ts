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
                    console.log("👆 Button.Click:", event, this);
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
        change?: (event: Event, select: Select<T>) => unknown;
    }
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
            this.data.enum.forEach(i => this.dom.appendChild(makeSelectOption(`${i}`, this.options?.makeLabel?.(i) ?? `${i}`)));
            this.switch(this.data.default);
            this.dom.addEventListener
            (
                "change", event =>
                {
                    console.log("👆 Select.Change:", event, this);
                    this.options?.change?.(event, this);
                }
            );
        }
        switch = (valueOrDirection: T | boolean) =>
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
        };
        get = () => this.dom.value;
    }
    export interface CheckboxArgumentsBase
    {
        default?: boolean;
    }
    export interface CheckboxOptions
    {
        change?: (event: Event, checked: Checkbox) => unknown;
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
                this.toggle(this.data.default);
            }
            this.dom.addEventListener
            (
                "change",
                event =>
                {
                    console.log("👆 Checkbox.Change:", event, this);
                    this.options?.change?.(event, this);
                }
            );
        }
        toggle = (checked?: boolean) =>
        {
            this.dom.checked = checked ?? ! this.get();
        };
        get = () => this.dom.checked;
    }
}