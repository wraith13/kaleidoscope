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
    export interface SelectArgumentsBase<T>
    {
        enum: T[];
        default: T;
        makeLabel?: (value: T) => string;
        change?: (event: Event, select: Select<T>) => unknown;
    }
    export type SelectArguments<T> = ArgumentsBase<HTMLSelectElement> & SelectArgumentsBase<T>;
    export const getDom = <T extends HTMLElement>(data: ArgumentsBase<T>): T =>
        "dom" in data ?
            data.dom:
            <T>document.getElementById(data.id);
    export class Select<T>
    {
        public dom: HTMLSelectElement;
        constructor(public data: SelectArguments<T>)
        {
            this.dom = getDom(data);
            this.data.enum.forEach(i => this.dom.appendChild(makeSelectOption(`${i}`, this.data.makeLabel?.(i) ?? `${i}`)));
            this.switch(this.data.default);
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
        change?: (event: Event, checked: Checkbox) => unknown;
    }
    export type CheckboxArguments = ArgumentsBase<HTMLInputElement> & CheckboxArgumentsBase;
    export class Checkbox
    {
        public dom: HTMLInputElement;
        constructor(public data: CheckboxArguments)
        {
            this.dom = getDom(data);
            if (undefined !== this.data.default)
            {
                this.toggle(this.data.default);
            }
        }
        toggle = (checked?: boolean) =>
        {
            this.dom.checked = checked ?? ! this.get();
        };
        get = () => this.dom.checked;
    }
}