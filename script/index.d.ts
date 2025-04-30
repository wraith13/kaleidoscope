declare module "script/library/type-guards" {
    export namespace TypeGuards {
        const hasValue: <T>(value: T | null | undefined) => value is T;
        const has: <KeyType extends string | string[]>(keyOrKeys: KeyType) => <ObjectType>(object: ObjectType | undefined) => object is ObjectType & (KeyType extends string ? { [PropertyName in KeyType]: Exclude<PropertyName extends keyof ObjectType ? ObjectType[PropertyName] : any, undefined>; } : KeyType extends string[] ? { [Prop in KeyType[number]]: Exclude<Prop extends keyof ObjectType ? ObjectType[Prop] : any, undefined>; } : never);
    }
}
declare module "script/library/locale" {
    import localeEn from "resource/lang.en";
    import localeJa from "resource/lang.ja";
    export namespace Locale {
        const master: {
            en: {
                "lang-label": string;
                Auto: string;
                description: string;
                "colorspace-label": string;
                "coloring-label": string;
                "pattern-label": string;
                "canvas-size-label": string;
                "layers-label": string;
                "spots-layers-label": string;
                "cycle-span-label": string;
                "fuse-fps-label": string;
                "easing-label": string;
                "with-fullscreen-label": string;
                "show-fps-label": string;
                "language-label": string;
                "run-benchmark-label": string;
                informationFuseFps: string;
                timeUnitMs: string;
                timeUnitS: string;
                timeUnitM: string;
                timeUnitH: string;
                timeUnitD: string;
                ago: string;
                "Hide UI": string;
                "Play / Pause": string;
                "Switch Pattern": string;
                "Switch Coloring": string;
                "Scaling Canvas Size": string;
                "Increase / Decrease Layer": string;
                "Speed Down / Up": string;
                FullScreen: string;
                "Show FPS": string;
                "benchmark-abort": string;
                "benchmark-close": string;
                "DELETEME.benchmarking-in-progress": string;
                "DELETEME.benchmark-phase-preparation": string;
                "DELETEME.benchmark-phase-screen-resolution": string;
                "DELETEME.benchmark-phase-fps": string;
                "DELETEME.benchmark-phase-calculation-score": string;
                "DELETEME.benchmark-phase-rendering-score": string;
                "DELETEME.benchmark-phase-finished": string;
                "benchmark-lines-calculation-score": string;
                "benchmark-spots-calculation-score": string;
                "benchmark-lines-rendering-score": string;
                "benchmark-spots-rendering-score": string;
                "benchmark-fps-score": string;
                "benchmark-report-label": string;
                "benchmark-total-score": string;
                "benchmark-score-per-fullhd": string;
                "benchmark-calculation-score": string;
                "benchmark-description-calculation-score": string;
                "benchmark-description-rendering-score": string;
                Unmeasured: string;
                UnmeasurablePoor: string;
                UnmeasurableRich: string;
            };
            ja: {
                "lang-label": string;
                Auto: string;
                description: string;
                "colorspace-label": string;
                "coloring-label": string;
                "pattern-label": string;
                "canvas-size-label": string;
                "layers-label": string;
                "spots-layers-label": string;
                "cycle-span-label": string;
                "fuse-fps-label": string;
                "easing-label": string;
                "with-fullscreen-label": string;
                "show-fps-label": string;
                "language-label": string;
                "run-benchmark-label": string;
                informationFuseFps: string;
                timeUnitMs: string;
                timeUnitS: string;
                timeUnitM: string;
                timeUnitH: string;
                timeUnitD: string;
                ago: string;
                "Hide UI": string;
                "Play / Pause": string;
                "Switch Pattern": string;
                "Switch Coloring": string;
                "Scaling Canvas Size": string;
                "Increase / Decrease Layer": string;
                "Speed Down / Up": string;
                FullScreen: string;
                "Show FPS": string;
                "benchmark-abort": string;
                "benchmark-close": string;
                "DELETEME.benchmarking-in-progress": string;
                "DELETEME.benchmark-phase-preparation": string;
                "DELETEME.benchmark-phase-screen-resolution": string;
                "DELETEME.benchmark-phase-fps": string;
                "DELETEME.benchmark-phase-calculation-score": string;
                "DELETEME.benchmark-phase-rendering-score": string;
                "DELETEME.benchmark-phase-finished": string;
                "benchmark-lines-calculation-score": string;
                "benchmark-spots-calculation-score": string;
                "benchmark-lines-rendering-score": string;
                "benchmark-spots-rendering-score": string;
                "benchmark-fps-score": string;
                "benchmark-report-label": string;
                "benchmark-total-score": string;
                "benchmark-score-per-fullhd": string;
                "benchmark-calculation-score": string;
                "benchmark-description-calculation-score": string;
                "benchmark-description-rendering-score": string;
                Unmeasured: string;
                UnmeasurablePoor: string;
                UnmeasurableRich: string;
            };
        };
        type Label = keyof typeof localeEn & keyof typeof localeJa;
        type Language = keyof typeof master;
        const getLocale: () => "ja" | "en";
        const setLocale: (locale?: Language | "Auto") => void;
        const map: (key: Label, l?: Language) => string;
    }
}
declare module "script/library/ui" {
    export namespace UI {
        const showPickerOnLabel: (label: HTMLLabelElement) => void;
        class ToggleClassForWhileTimer {
            timer: number | undefined;
            constructor();
            start(element: HTMLElement, token: string, span: number): void;
            isOn: () => boolean;
        }
        const fullscreenEnabled: any;
        const requestFullscreen: (dom?: Element) => void;
        const exitFullscreen: () => void;
        type Attributes = Record<string, string | number | boolean>;
        type Styles = Partial<CSSStyleDeclaration>;
        type Events = {
            [K in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[K]) => void;
        };
        type ElementSource<T extends HtmlTag = any> = CreateElementArguments<T> | HTMLElementTagNameMap[T] | Text | string;
        interface ElementOptions {
            className?: string;
            text?: string;
            attributes?: Attributes;
            children?: ElementSource[];
            styles?: Styles;
            events?: Events;
        }
        interface CreateElementArguments<T extends HtmlTag> extends ElementOptions {
            tag: T;
        }
        type HtmlTag = keyof HTMLElementTagNameMap;
        const setOptions: <T extends HTMLElement>(element: T, options?: ElementOptions) => T;
        const createElement: <T extends HtmlTag>(element: ElementSource<T>) => HTMLElementTagNameMap[T] | Text;
        const removeAllChildren: <ParentT extends HTMLElement>(parent: ParentT) => ParentT;
        const appendChild: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: ElementSource<T>) => ParentT;
        const replaceChild: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: ElementSource<T>) => ParentT;
        const appendChildren: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: ElementSource<T>[]) => ParentT;
        const replaceChildren: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: ElementSource<T>[]) => ParentT;
        const cullOrBreed: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: ElementSource<T>, size: number) => ParentT;
        const getElementsByClassName: <T extends HtmlTag>(tag: T, className: string, parent?: Element) => HTMLElementTagNameMap[T][];
        const querySelectorAllWithFallback: <T extends HtmlTag>(tag: T, selectorss: string[], parent?: Element) => HTMLElementTagNameMap[T][];
        const getElementById: <T extends HtmlTag>(tag: T, id: string) => HTMLElementTagNameMap[T];
        const querySelector: <T extends HtmlTag>(tag: T, selectors: string, parent?: Element) => HTMLElementTagNameMap[T];
    }
}
declare module "script/library/control" {
    export namespace Control {
        interface ArgumentsBaseDom<T extends HTMLElement> {
            dom: T;
        }
        interface ArgumentsBaseId {
            id: string;
        }
        type ArgumentsBase<T extends HTMLElement> = ArgumentsBaseDom<T> | ArgumentsBaseId;
        const getDom: <T extends HTMLElement>(data: ArgumentsBase<T>) => T;
        const eventLog: <T extends HTMLElement>(control: {
            data: ArgumentsBase<T>;
        }, event: Event, message: string) => void;
        interface ButtonArgumentsBase<T extends HTMLElement> {
            click?: (event: Event | null, select: Button<T>) => unknown;
        }
        type ButtonArguments<T extends HTMLElement = HTMLButtonElement> = ArgumentsBase<T> & ButtonArgumentsBase<T>;
        class Button<T extends HTMLElement> {
            data: ButtonArguments<T>;
            dom: T;
            constructor(data: ButtonArguments<T>);
            setClick: (click: (event: Event | null, select: Button<T>) => unknown) => (event: Event | null, select: Button<T>) => unknown;
            fire: () => unknown;
        }
        interface SelectArgumentsBase<T> {
            enum: T[];
            default: T;
        }
        interface SelectOptions<T> {
            makeLabel?: (value: T) => string;
            change?: (event: Event | null, select: Select<T>) => unknown;
            preventOnChangeWhenNew?: boolean;
        }
        const preventOnChange: "preventOnChange";
        type SelectArguments<T> = ArgumentsBase<HTMLSelectElement> & SelectArgumentsBase<T>;
        class Select<T> {
            data: SelectArguments<T>;
            options?: SelectOptions<T> | undefined;
            dom: HTMLSelectElement;
            constructor(data: SelectArguments<T>, options?: SelectOptions<T> | undefined);
            setChange: (change: (event: Event | null, select: Select<T>) => unknown) => {
                change: (event: Event | null, select: Select<T>) => unknown;
                makeLabel?: ((value: T) => string) | undefined;
                preventOnChangeWhenNew?: boolean;
            };
            reloadOptions: (value?: T) => void;
            switch: (valueOrDirection: T | boolean, preventOnChange?: "preventOnChange") => void;
            get: () => string;
            fire: () => unknown;
        }
        interface CheckboxArgumentsBase {
            default?: boolean;
        }
        interface CheckboxOptions {
            change?: (event: Event | null, checked: Checkbox) => unknown;
            preventOnChangeWhenNew?: boolean;
        }
        type CheckboxArguments = ArgumentsBase<HTMLInputElement> & CheckboxArgumentsBase;
        class Checkbox {
            data: CheckboxArguments;
            options?: CheckboxOptions | undefined;
            dom: HTMLInputElement;
            constructor(data: CheckboxArguments, options?: CheckboxOptions | undefined);
            setChange: (change: (event: Event | null, checked: Checkbox) => unknown) => {
                change: (event: Event | null, checked: Checkbox) => unknown;
                preventOnChangeWhenNew?: boolean;
            };
            toggle: (checked?: boolean, preventOnChange?: "preventOnChange") => void;
            get: () => boolean;
            fire: () => unknown;
        }
    }
}
declare module "script/library/shortcuts" {
    import shortcuts from "resource/shortcuts";
    export namespace Shortcuts {
        type Entry = (typeof shortcuts)[number]["shortcuts"][number];
        type CommandKey = Entry["command"];
        type CommandMap = {
            [key in Shortcuts.CommandKey]-?: () => void;
        };
        const getDisplayList: () => {
            keyss: string[][];
            description: string;
        }[];
        const handleKeyEvent: (type: "onKeyDown" | "onKeyUp", event: KeyboardEvent, commandMap: CommandMap) => void;
        const setCommandMap: (commandMap: CommandMap) => void;
    }
}
declare module "script/library/index" {
    import * as ImportedTypeGuards from "script/library/type-guards";
    import * as ImportedLocale from "script/library/locale";
    import * as ImportedUI from "script/library/ui";
    import * as ImportedControl from "script/library/control";
    import * as ImportedShortcuts from "script/library/shortcuts";
    export namespace Library {
        export import TypeGuards = ImportedTypeGuards.TypeGuards;
        export import Locale = ImportedLocale.Locale;
        export import UI = ImportedUI.UI;
        export import Control = ImportedControl.Control;
        export import Shortcuts = ImportedShortcuts.Shortcuts;
    }
}
declare module "script/tools/number" {
    export namespace Number {
        const toString: (value: number, maximumFractionDigits?: number) => string;
    }
}
declare module "script/tools/timespan" {
    export namespace Timespan {
        const toDisplayString: (value: number, maximumFractionDigits?: number) => string;
    }
}
declare module "script/tools/math" {
    export namespace Math {
        const scale: (min: number, max: number) => (r: number) => number;
        const sum: (numbers: number[]) => number;
        const mod: (n: number, m: number) => number;
    }
}
declare module "script/tools/hash" {
    export namespace Hash {
        const fnv1a_32: (key: string) => number;
    }
}
declare module "script/tools/random" {
    export namespace Random {
        type Function = (index?: number, prime?: number) => number;
        const makeInteger: (size: number, random?: Function, index?: number, prime?: number) => number;
        const select: <T>(list: T[], random?: Function, index?: number, prime?: number) => T;
        class IndexedRandom {
            private hash32;
            private seed;
            private prime;
            index: number;
            constructor(hash32?: (key: string) => number, seed?: number | string, prime?: number);
            get: (index?: number, prime?: number) => number;
            getFunction: () => Function;
        }
    }
}
declare module "script/tools/array" {
    export namespace Array {
        const cycleSelect: <T extends unknown[], Index extends number>(list: T, ix: Index) => T[Index] extends never ? undefined : T[Index];
        const joinable: <T>(value: T, condition?: boolean) => T[];
        const uniqueFilter: <T>(i: T, ix: number, list: T[]) => boolean;
    }
}
declare module "script/tools/index" {
    import * as ImportedNumber from "script/tools/number";
    import * as ImportedTimespan from "script/tools/timespan";
    import * as ImportedMath from "script/tools/math";
    import * as ImportedRandom from "script/tools/random";
    import * as ImportedArray from "script/tools/array";
    import * as ImportedHash from "script/tools/hash";
    export namespace Tools {
        export import Number = ImportedNumber.Number;
        export import Timespan = ImportedTimespan.Timespan;
        export import Math = ImportedMath.Math;
        export import Random = ImportedRandom.Random;
        export import Array = ImportedArray.Array;
        export import Hash = ImportedHash.Hash;
    }
}
declare module "script/ui" {
    import { Library } from "script/library/index";
    export namespace UI {
        const screenBody: HTMLDivElement;
        const canvas: HTMLDivElement;
        const playButton: Library.Control.Button<HTMLElement>;
        const runBenchmarkButton: Library.Control.Button<HTMLElement>;
        const colorspaceSelect: Library.Control.Select<string>;
        const coloringSelect: Library.Control.Select<string>;
        const patternSelect: Library.Control.Select<string>;
        const canvasSizeSelect: Library.Control.Select<number>;
        const layersSelect: Library.Control.Select<number>;
        const spotslayersSelect: Library.Control.Select<number>;
        const cycleSpanSelect: Library.Control.Select<number>;
        const fuseFpsSelect: Library.Control.Select<number>;
        const easingCheckbox: Library.Control.Checkbox;
        const withFullscreen: Library.Control.Checkbox;
        const showFps: Library.Control.Checkbox;
        const languageSelect: Library.Control.Select<string>;
        const fpsDisplay: HTMLDivElement;
        const benchmarkProgressBar: HTMLDivElement;
        const benchmarkCanvas: HTMLDivElement;
        const keyboardShortcut: HTMLDivElement;
        const benchmarkTotalScore: HTMLSpanElement;
        const benchmarkScorePerFullHD: HTMLSpanElement;
        const benchmarkCalculationScore: HTMLSpanElement;
        const benchmarkLinesCalculationScore: HTMLSpanElement;
        const benchmarkSpotsCalculationScore: HTMLSpanElement;
        const benchmarkLinesRenderingScore: HTMLSpanElement;
        const benchmarkSpotsRenderingScore: HTMLSpanElement;
        const benchmarkFpsScore: HTMLSpanElement;
        const benchmarkDetails: HTMLDivElement;
        const benchmarkPopupLabel: HTMLSpanElement;
        const benchmarkPopupValue: HTMLSpanElement;
        const benchmarkAbortButton: Library.Control.Button<HTMLElement>;
        const benchmarkResultCloseButton: Library.Control.Button<HTMLElement>;
        const updateLanguage: () => void;
        const initialize: () => void;
    }
}
declare module "script/features/fps" {
    export namespace Fps {
        export class OnlineStandardDeviation {
            count: number;
            mean: number;
            m2: number;
            reset: () => void;
            update: (value: number) => void;
            isValid: () => boolean;
            getVariance: () => number;
            getStandardDeviation: () => number;
        }
        export const standardDeviation: OnlineStandardDeviation;
        interface FpsHistoryEntry {
            fps: number;
            now: number;
            text: string;
        }
        export let currentMaxFps: FpsHistoryEntry;
        export let currentNowFps: FpsHistoryEntry;
        export let currentMinFps: FpsHistoryEntry;
        export let fuseFps: number;
        export let isValid: boolean;
        export let averageFps: number;
        export const reset: () => void;
        export const step: (now: number) => void;
        export const getText: () => string;
        export const isUnderFuseFps: () => boolean;
        export {};
    }
}
declare module "flounder.style.js/evil-type.ts/common/evil-type" {
    export namespace EvilType {
        const comparer: <Item, T extends ((i: Item) => any)[]>(...args: T) => (a: Item, b: Item) => 0 | 1 | -1;
        const lazy: <T extends (...args: any[]) => any>(invoker: () => T) => T;
        namespace Error {
            interface Item {
                type: "solid" | "fragment";
                path: string;
                requiredType: string;
                actualValue: string;
            }
            interface Listener {
                path: string;
                matchRate: {
                    [path: string]: boolean | number;
                };
                errors: Item[];
            }
            const makeListener: (path?: string) => Listener;
            const nextListener: <T extends Listener | undefined>(name: string | number, listner: T) => T;
            const makePath: (path: string, name: string | number) => string;
            const getPathDepth: (path: string) => number;
            const getType: (isType: ((v: unknown, listner?: Listener) => boolean)) => string[];
            const isMtached: (matchRate: boolean | number) => matchRate is true;
            const matchRateToNumber: (matchRate: boolean | number) => number;
            const setMatchRate: (listner: Listener | undefined, matchRate: boolean | number) => matchRate is true;
            const getMatchRate: (listner: Listener, path?: string) => number | boolean;
            const calculateMatchRate: (listner: Listener, path?: string) => number | true;
            const setMatch: (listner: Listener | undefined) => void;
            const raiseError: (listner: Listener | undefined, requiredType: string | (() => string), actualValue: unknown) => boolean;
            const orErros: (listner: Listener, modulus: number, errors: Item[], fullErrors: Item[]) => void;
            const andErros: (listner: Listener, errors: Item[]) => void;
            const valueToString: (value: unknown) => string;
            const withErrorHandling: (isMatchType: boolean, listner: Listener | undefined, requiredType: string | (() => string), actualValue: unknown) => boolean;
        }
        namespace Validator {
            type ErrorListener = Error.Listener;
            const makeErrorListener: (path?: string) => Error.Listener;
            type IsType<T> = (value: unknown, listner?: ErrorListener) => value is T;
            const isJust: <T>(target: T) => (value: unknown, listner?: ErrorListener) => value is T;
            const isNever: (value: unknown, listner?: ErrorListener) => value is never;
            const isUndefined: (value: unknown, listner?: ErrorListener) => value is undefined;
            const isUnknown: (_value: unknown, _listner?: ErrorListener) => _value is unknown;
            const isAny: (_value: unknown, _listner?: ErrorListener) => _value is any;
            const isNull: (value: unknown, listner?: ErrorListener) => value is null;
            const isBoolean: (value: unknown, listner?: ErrorListener) => value is boolean;
            const isInteger: (value: unknown, listner?: ErrorListener) => value is number;
            const isSafeInteger: (value: unknown, listner?: ErrorListener) => value is number;
            const isDetailedInteger: (data: {
                minimum?: number;
                exclusiveMinimum?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                multipleOf?: number;
            }, safeInteger?: "safe") => IsType<number>;
            const isNumber: (value: unknown, listner?: ErrorListener) => value is number;
            const isSafeNumber: (value: unknown, listner?: ErrorListener) => value is number;
            const isDetailedNumber: (data: {
                minimum?: number;
                exclusiveMinimum?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                multipleOf?: number;
            }, safeNumber?: "safe") => IsType<number>;
            const isString: (value: unknown, listner?: ErrorListener) => value is string;
            const makeStringTypeName: (data: {
                minLength?: number;
                maxLength?: number;
                pattern?: string;
                format?: string;
                regexpFlags?: string;
            }) => string;
            const regexpTest: (pattern: string, flags: string, text: string) => boolean;
            const isDetailedString: <Type extends string = string>(data: {
                minLength?: number;
                maxLength?: number;
                pattern?: string;
                format?: string;
                regexpFlags?: string;
                regexpTest?: (pattern: string, flags: string, text: string) => boolean;
            }, regexpFlags?: string) => IsType<Type>;
            type ActualObject = Exclude<object, null>;
            const isObject: (value: unknown) => value is ActualObject;
            const isEnum: <T>(list: readonly T[]) => (value: unknown, listner?: ErrorListener) => value is T;
            const isUniqueItems: (list: unknown[]) => boolean;
            const makeArrayTypeName: (data?: {
                minItems?: number;
                maxItems?: number;
                uniqueItems?: boolean;
            }) => string;
            const isArray: <T>(isType: IsType<T>, data?: {
                minItems?: number;
                maxItems?: number;
                uniqueItems?: boolean;
            }) => (value: unknown, listner?: ErrorListener) => value is T[];
            const makeOrTypeNameFromIsTypeList: <T extends any[]>(...isTypeList: { [K in keyof T]: IsType<T[K]>; }) => string[];
            const getBestMatchErrors: (listeners: ErrorListener[]) => Error.Listener[];
            const isOr: <T extends any[]>(...isTypeList: { [K in keyof T]: IsType<T[K]>; }) => (value: unknown, listner?: ErrorListener) => value is T[number];
            type OrTypeToAndType<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
            const isAnd: <T extends any[]>(...isTypeList: { [K in keyof T]: IsType<T[K]>; }) => (value: unknown, listner?: ErrorListener) => value is OrTypeToAndType<T[number]>;
            interface NeverTypeGuard {
                $type: "never-type-guard";
            }
            const isNeverTypeGuard: (value: unknown, listner?: ErrorListener) => value is NeverTypeGuard;
            const isNeverMemberType: <ObjectType extends ActualObject>(value: ActualObject, member: keyof ObjectType, _neverTypeGuard: NeverTypeGuard, listner?: ErrorListener) => boolean;
            interface OptionalTypeGuard<T> {
                $type: "optional-type-guard";
                isType: IsType<T> | ObjectValidator<T>;
            }
            const isOptionalTypeGuard: (value: unknown, listner?: ErrorListener) => value is OptionalTypeGuard<unknown>;
            const makeOptionalTypeGuard: <T>(isType: IsType<T> | ObjectValidator<T>) => OptionalTypeGuard<T>;
            const invokeIsType: <T>(isType: IsType<T> | ObjectValidator<T>) => IsType<T> | ((value: unknown, listner?: ErrorListener) => value is object);
            const isOptional: <T>(isType: IsType<T> | ObjectValidator<T>) => OptionalTypeGuard<T>;
            const isOptionalMemberType: <ObjectType extends ActualObject>(value: ActualObject, member: keyof ObjectType, optionalTypeGuard: OptionalTypeGuard<unknown>, listner?: ErrorListener) => boolean;
            const isMemberType: <ObjectType extends ActualObject>(value: ActualObject, member: keyof ObjectType, isType: IsType<unknown> | OptionalTypeGuard<unknown>, listner?: ErrorListener) => boolean;
            type NeverKeys<T> = {
                [K in keyof T]: T[K] extends never ? K : never;
            }[keyof T];
            type OptionalKeys<T> = Exclude<{
                [K in keyof T]: T extends Record<K, T[K]> ? never : K;
            } extends {
                [_ in keyof T]: infer U;
            } ? U : never, NeverKeys<T>>;
            type OptionalType<T> = Required<Pick<T, OptionalKeys<T>>>;
            type NonOptionalKeys<T> = Exclude<keyof T, NeverKeys<T> | OptionalKeys<T>>;
            type NonOptionalType<T> = Pick<T, NonOptionalKeys<T>>;
            type ObjectValidator<ObjectType> = {
                [key in NeverKeys<ObjectType>]: NeverTypeGuard;
            } & {
                [key in NonOptionalKeys<ObjectType>]: IsType<ObjectType[key]> | ObjectValidator<ObjectType[key]>;
            } & {
                [key in OptionalKeys<ObjectType>]: OptionalTypeGuard<Exclude<ObjectType[key], undefined>>;
            };
            type MergeType<A, B> = Omit<A, keyof B> & B;
            type MergeMultipleType<A, B extends any[]> = B extends [infer Head, ...infer Tail] ? MergeMultipleType<MergeType<A, Head>, Tail> : B extends [infer Last] ? MergeType<A, Last> : A;
            const mergeObjectValidator: <A, B extends ObjectValidator<unknown>[]>(target: ObjectValidator<A>, ...sources: B) => MergeMultipleType<ObjectValidator<A>, B>;
            const isSpecificObject: <ObjectType extends ActualObject>(memberValidator: ObjectValidator<ObjectType> | (() => ObjectValidator<ObjectType>), options?: {
                additionalProperties?: boolean;
            }) => (value: unknown, listner?: ErrorListener) => value is ObjectType;
            const isDictionaryObject: <MemberType, Keys extends string>(isType: IsType<MemberType>, keys?: Keys[], options?: {
                additionalProperties?: boolean;
            }) => (value: unknown, listner?: ErrorListener) => value is { [key in Keys]: MemberType; };
        }
    }
}
declare module "flounder.style.js/generated/type" {
    import { EvilType } from "flounder.style.js/evil-type.ts/common/evil-type";
    export { EvilType };
    export namespace Type {
        type FlounderType = Arguments["type"];
        type LayoutAngle = "regular" | "alternative";
        type HexColor = `#${string}`;
        type NamedColor = "black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fuchsia" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua" | "aliceblue" | "antiquewhite" | "aquamarine" | "azure" | "beige" | "bisque" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "limegreen" | "linen" | "magenta" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "oldlace" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "whitesmoke" | "yellowgreen";
        type Color = HexColor | NamedColor;
        type Rate = number;
        type SignedRate = number;
        type Pixel = number;
        type SignedPixel = number;
        type Count = number;
        type NamedDirectionAngle = "right" | "right-down" | "down" | "left-down" | "left" | "left-up" | "up" | "right-up";
        type DirectionAngle = NamedDirectionAngle | SignedRate;
        interface ArgumentsBase {
            $schema?: "https://raw.githubusercontent.com/wraith13/flounder.style.js/master/generated/schema.json#";
            type: FlounderType;
            layoutAngle?: LayoutAngle | SignedRate;
            offsetX?: SignedPixel;
            offsetY?: SignedPixel;
            foregroundColor: Color;
            backgroundColor?: Color;
            intervalSize?: Pixel;
            depth: Rate;
            blur?: Pixel;
            maxPatternSize?: Pixel;
            reverseRate?: SignedRate | "auto" | "-auto";
            anglePerDepth?: SignedRate | "auto" | "-auto";
            maximumFractionDigits?: Count;
        }
        interface SpotArguments extends ArgumentsBase {
            type: "trispot" | "tetraspot";
            layoutAngle?: LayoutAngle | 0;
            anglePerDepth?: 0;
        }
        interface LineArguments extends ArgumentsBase {
            type: "stripe" | "diline" | "triline";
        }
        type Arguments = SpotArguments | LineArguments;
        const isFlounderType: EvilType.Validator.IsType<FlounderType>;
        const isLayoutAngle: EvilType.Validator.IsType<LayoutAngle>;
        const isHexColor: EvilType.Validator.IsType<HexColor>;
        const isNamedColor: EvilType.Validator.IsType<NamedColor>;
        const isColor: EvilType.Validator.IsType<Color>;
        const isRate: EvilType.Validator.IsType<Rate>;
        const isSignedRate: EvilType.Validator.IsType<SignedRate>;
        const isPixel: EvilType.Validator.IsType<Pixel>;
        const isSignedPixel: EvilType.Validator.IsType<SignedPixel>;
        const isCount: EvilType.Validator.IsType<Count>;
        const isNamedDirectionAngle: EvilType.Validator.IsType<NamedDirectionAngle>;
        const isDirectionAngle: EvilType.Validator.IsType<DirectionAngle>;
        const isArgumentsBase: (value: unknown, listner?: EvilType.Validator.ErrorListener) => value is ArgumentsBase;
        const isSpotArguments: (value: unknown, listner?: EvilType.Validator.ErrorListener) => value is SpotArguments;
        const isLineArguments: (value: unknown, listner?: EvilType.Validator.ErrorListener) => value is LineArguments;
        const isArguments: EvilType.Validator.IsType<Arguments>;
        const argumentsBaseValidatorObject: EvilType.Validator.ObjectValidator<ArgumentsBase>;
        const spotArgumentsValidatorObject: EvilType.Validator.ObjectValidator<SpotArguments>;
        const lineArgumentsValidatorObject: EvilType.Validator.ObjectValidator<LineArguments>;
    }
}
declare module "flounder.style.js/index" {
    import { EvilType, Type as GeneratedType } from "flounder.style.js/generated/type";
    export { EvilType };
    export namespace FlounderStyle {
        export import Type = GeneratedType;
        const sin: (rate: Type.SignedRate) => Type.SignedRate;
        const cos: (rate: Type.SignedRate) => Type.SignedRate;
        const atan2: (direction: {
            x: Type.SignedPixel;
            y: Type.SignedPixel;
        }) => Type.SignedRate;
        type StyleKey = string;
        type StyleValue = string | undefined;
        type StyleProperty = {
            key: StyleKey;
            value: StyleValue;
        };
        type Style = {
            [key: StyleKey]: StyleValue;
        };
        const styleToStylePropertyList: (style: Style) => StyleProperty[];
        const setStyleProperty: (element: HTMLElement, style: StyleProperty) => HTMLElement;
        const makeSureStyle: (styleOrArguments: Style | Type.Arguments) => Style;
        const setStyle: (element: HTMLElement, styleOrArguments: Style | Type.Arguments) => HTMLElement;
        const stylePropertyToString: (style: StyleProperty) => string;
        const styleToString: (styleOrArguments: Style | Type.Arguments, separator?: string) => string;
        const regulateRate: (rate: Type.SignedRate) => Type.Rate;
        const directionAngleToRate: (angle: Type.DirectionAngle) => Type.Rate;
        const isArguments: (value: unknown) => value is Type.Arguments;
        const getPatternType: (data: Type.Arguments) => Type.FlounderType;
        const getLayoutAngle: (data: Type.Arguments) => Type.LayoutAngle;
        const getActualLayoutAngle: (data: Type.Arguments) => number;
        const getAutoAnglePerDepth: (data: Type.Arguments) => number;
        const getActualAnglePerDepth: (data: Type.Arguments) => number;
        const getAngleOffsetByDepth: (data: Type.Arguments) => number;
        const getAngleOffset: (data: Type.Arguments) => number;
        const getBackgroundColor: (data: Type.Arguments) => Type.Color;
        const getIntervalSize: (data: Type.Arguments) => number;
        const getBlur: (data: Type.Arguments) => number;
        const getActualReverseRate: (data: Type.Arguments) => number;
        const getAbsoulteReverseRate: (data: Type.Arguments) => undefined | number | "auto";
        const makeStyle: (data: Type.Arguments) => Style;
        const makePlainStyleOrNull: (data: Type.Arguments) => Style | null;
        const simpleStructuredClone: <T>(value: T) => T;
        const reverseArguments: (data: Type.Arguments) => Type.Arguments;
        const makeTrispotStyle: (data: Type.Arguments) => Style;
        const makeTetraspotStyle: (data: Type.Arguments) => Style;
        const makeStripeStyle: (data: Type.Arguments) => Style;
        const makeDilineStyle: (data: Type.Arguments) => Style;
        const makeTrilineStyle: (data: Type.Arguments) => Style;
        interface OffsetCoefficientDirection {
            x: number;
            y: number;
        }
        interface OffsetCoefficient {
            directions: OffsetCoefficientDirection[];
            intervalSize: number;
            radius: number;
        }
        const calculateOffsetCoefficientDirections: (data: Type.Arguments) => OffsetCoefficientDirection[];
        const calculateOffsetCoefficient: (data: Type.Arguments) => OffsetCoefficient;
        const comparer: <valueT>(a: valueT, b: valueT) => 0 | 1 | -1;
        const makeComparer: <objectT, valueT>(f: (o: objectT) => valueT) => (a: objectT, b: objectT) => 0 | 1 | -1;
        const compareAngles: (a: Type.SignedRate, b: Type.SignedRate) => Type.SignedRate;
        const selectClosestAngleDirection: (directions: OffsetCoefficientDirection[], angle: Type.DirectionAngle) => OffsetCoefficientDirection;
    }
}
declare module "script/features/animation" {
    import { FlounderStyle } from "flounder.style.js/index";
    import { phiColors } from "phi-colors";
    import { Tools } from "script/tools/index";
    import control from "resource/control";
    export namespace Animation {
        export const black: {
            readonly r: 0;
            readonly g: 0;
            readonly b: 0;
        };
        export const white: {
            readonly r: 1;
            readonly g: 1;
            readonly b: 1;
        };
        export class PhiColoring {
            hue: number;
            PhiHueUnit: number;
            RgbHueUnit: number;
            static regulateH: (h: number) => number;
            static regulateS: (s: number) => number;
            static regulateL: (l: number) => number;
            constructor(hue?: number, saturation?: number, lightness?: number, PhiHueUnit?: number, RgbHueUnit?: number);
            s: number;
            l: number;
            makeRgb: (step: number) => phiColors.Rgb;
            makePhiRgb: (step: number) => phiColors.Rgb;
            makeSrgbColor: (rgb: phiColors.Rgb) => FlounderStyle.Type.HexColor;
            makeColor: (colorspace: string, rgb: phiColors.Rgb) => FlounderStyle.Type.Color;
        }
        interface Layer {
            layer: HTMLDivElement;
            mile: number;
            offset: number;
            arguments: FlounderStyle.Type.Arguments | undefined;
        }
        export class Animator {
            canvas: HTMLDivElement;
            random: Tools.Random.Function;
            phiColoring: PhiColoring;
            layers: Layer[];
            spotsLayersRate: number;
            pattern: typeof control.pattern.enum[number];
            startAt: number;
            offsetAt: number;
            cycleSpan: number;
            diagonalSize: number;
            constructor(canvas: HTMLDivElement, random?: Tools.Random.Function, phiColoring?: PhiColoring);
            getDiagonalSize: () => number;
            makeColor: (rgb: phiColors.Rgb) => FlounderStyle.Type.Color;
            easing: (t: number) => number;
            argumentHistory: FlounderStyle.Type.Arguments[];
            startStep: (now: number) => number;
            makeRandomArguments: (mile: number) => FlounderStyle.Type.Arguments;
            getNextColorMaker: (coloring: (typeof control.coloring.enum)[number]) => (mile: number, offset: number, _ix: number) => phiColors.Rgb;
            makeForegroundRgb: (mile: number, offset: number, ix: number) => phiColors.Rgb;
            makeBackgroundRgb: (mile: number, offset: number, ix: number) => phiColors.Rgb;
            makeForegroundColor: (mile: number, offset: number, ix: number) => FlounderStyle.Type.Color;
            makeBackgroundColor: (mile: number, offset: number, ix: number) => FlounderStyle.Type.Color;
            isStarted: () => boolean;
            getStep: (universalStep: number, layer: Layer) => number;
            getSpotsIndex: (ix: number) => number;
            isValidSpotLayer: (ix: number) => boolean;
            isValidLayer: (ix: number) => boolean;
            step: (now: number) => void;
            update: () => void;
            setColorspace: (colorspace: (typeof control.colorspace.enum)[number]) => void;
            setColoring: (coloring: (typeof control.coloring.enum)[number]) => (mile: number, offset: number, _ix: number) => phiColors.Rgb;
            setPattern: (newPattern: (typeof control.pattern.enum)[number]) => string;
            setDiagonalSize: (newDiagonalSize: number) => void;
            updateDiagonalSize: () => void;
            setCycleSpan: (newCycleSpan: number) => void;
            setLayers: (newLayers: number) => void;
            setSpotsLayers: (spotsLayersRate: number) => void;
            setEasing: (enabled: boolean) => void;
        }
        export {};
    }
}
declare module "script/features/benchmark" {
    import { Library } from "script/library/index";
    import { Animation } from "script/features/animation";
    export namespace Benchmark {
        const animator: Animation.Animator;
        type MeasurementScore<T> = "Unmeasured" | "UnmeasurablePoor" | T | "UnmeasurableRich";
        const calculateMeasurementScore: <A, B, R>(a: MeasurementScore<A>, b: MeasurementScore<B>, calculate: (a: A, b: B) => R) => MeasurementScore<R>;
        const isMeasuredScore: <T>(score: MeasurementScore<T>) => score is T;
        const getMeasurementScoreValue: <T>(score: MeasurementScore<T>) => T | undefined;
        const measurementScoreToText: <T>(score: MeasurementScore<T>, toText: (score: T) => string) => string;
        interface Result {
            screenResolution: MeasurementScore<{
                width: number;
                height: number;
                colorDepth: number;
                devicePixelRatio: number;
            }>;
            screenResolutionScore: MeasurementScore<number>;
            fps: MeasurementScore<number>;
            linesCalculationScore: MeasurementScore<number>;
            spotsCalculationScore: MeasurementScore<number>;
            totalCalculationScore: MeasurementScore<number>;
            linesRenderingScorePerFullHd: MeasurementScore<number>;
            spotsRenderingScorePerFullHd: MeasurementScore<number>;
            totalRenderingScore: MeasurementScore<number>;
            totalScore: MeasurementScore<number>;
        }
        const getUnmeasuredReslult: () => Result;
        const measureScreenResolution: () => {
            width: number;
            height: number;
            colorDepth: number;
            devicePixelRatio: number;
        };
        interface MeasurementPhaseBase {
            start: (measure: Measurement, now: number) => void;
            step: (measure: Measurement, now: number) => void;
        }
        class ScreenResolutionMeasurementPhase implements MeasurementPhaseBase {
            start: (_measure: Measurement, now: number) => void;
            step: (measure: Measurement, now: number) => void;
            startAt: number;
        }
        class FpsMeasurementPhase implements MeasurementPhaseBase {
            start: (_measure: Measurement, now: number) => void;
            step: (measure: Measurement, now: number) => void;
            startAt: number;
            fpsTotal: number;
            fpsCount: number;
        }
        class ScoreMeasurementPhaseBase {
            calculateOnly: boolean;
            pattern: "triline" | "trispot";
            scoreLabel: Library.Locale.Label;
            calculateScore: (measure: Measurement) => unknown;
            layers: number;
            halfRefreshRate: number;
            constructor(calculateOnly: boolean, pattern: "triline" | "trispot", scoreLabel: Library.Locale.Label, calculateScore: (measure: Measurement) => unknown);
            start: (measure: Measurement, now: number) => void;
            startPattern: (_measure: Measurement, now: number) => void;
            startLayers: (now: number, layers: number) => void;
            step: (measure: Measurement, now: number) => void;
            laysersStartAt: number;
            patternStartAt: number;
            isStable: (now: number) => boolean;
            isNeedAdjustingLayers: (now: number) => boolean;
            isEnd: (now: number) => boolean;
            calculationScore: () => number;
        }
        class LinesCalculationScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase {
            constructor();
        }
        class SpotsCalculationScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase {
            constructor();
        }
        class LinesRenderingScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase {
            constructor();
        }
        class SpotsRenderingScoreMeasurementPhase extends ScoreMeasurementPhaseBase implements MeasurementPhaseBase {
            constructor();
        }
        class Measurement {
            canvas: HTMLDivElement;
            result: Result;
            phase: number;
            currentPhase: MeasurementPhaseBase | null;
            constructor(canvas: HTMLDivElement);
            start: () => void;
            step: (now: number) => void;
            next: () => void;
            isEnd: () => boolean;
            end: () => void;
        }
    }
}
declare module "script/features/index" {
    import * as ImportedFps from "script/features/fps";
    import * as ImportedAnimation from "script/features/animation";
    import * as ImportedBenchmark from "script/features/benchmark";
    export namespace Features {
        export import Fps = ImportedFps.Fps;
        export import Animation = ImportedAnimation.Animation;
        export import Benchmark = ImportedBenchmark.Benchmark;
    }
}
declare module "script/controller/base" {
    export namespace Base {
        const isInMode: (mode: string) => boolean;
        const intoMode: (mode: string) => void;
        const exitMode: (mode: string) => void;
        const updateFullscreenState: (fullscreen?: boolean) => void;
    }
}
declare module "script/controller/animation" {
    import { Features } from "script/features/index";
    export namespace Animation {
        const animator: Features.Animation.Animator;
        const isInAnimation: () => boolean;
        const playAnimation: () => void;
        const pauseAnimation: () => void;
        const loopAnimation: (now: number) => void;
        const start: () => number;
        const updateFps: () => void;
    }
}
declare module "script/controller/benchmark" {
    import { Features } from "script/features/index";
    export namespace Benchmark {
        const benchmark: Features.Benchmark.Measurement;
        const loopBenchmark: (now: number) => void;
        const isInBenchmark: () => boolean;
        const runBenchmark: () => void;
        const stopBenchmark: () => void;
        const showResult: () => void;
    }
}
declare module "script/controller/index" {
    import * as ImportedBase from "script/controller/base";
    import * as ImportedAnimation from "script/controller/animation";
    import * as ImportedBenchmark from "script/controller/benchmark";
    export namespace Controller {
        export import Base = ImportedBase.Base;
        export import Animation = ImportedAnimation.Animation;
        export import Benchmark = ImportedBenchmark.Benchmark;
        const toggleAnimation: () => void;
    }
}
declare module "script/events" {
    export namespace Events {
        const initialize: () => void;
    }
}
declare module "script/index" { }
