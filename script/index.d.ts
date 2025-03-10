declare module "script/control" {
    export namespace Control {
        interface ArgumentsBaseDom<T extends HTMLElement> {
            dom: T;
        }
        interface ArgumentsBaseId {
            id: string;
        }
        type ArgumentsBase<T extends HTMLElement> = ArgumentsBaseDom<T> | ArgumentsBaseId;
        const getDom: <T extends HTMLElement>(data: ArgumentsBase<T>) => T;
        interface ButtonArgumentsBase<T extends HTMLElement> {
            click: (event: Event, select: Button<T>) => unknown;
        }
        type ButtonArguments<T extends HTMLElement = HTMLButtonElement> = ArgumentsBase<T> & ButtonArgumentsBase<T>;
        class Button<T extends HTMLElement> {
            data: ButtonArguments<T>;
            dom: T;
            constructor(data: ButtonArguments<T>);
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
            switch: (valueOrDirection: T | boolean, preventOnChange?: "preventOnChange") => void;
            get: () => string;
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
            toggle: (checked?: boolean, preventOnChange?: "preventOnChange") => void;
            get: () => boolean;
        }
    }
}
declare module "script/ui" {
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
        interface ElementOptions {
            text?: string;
            attributes?: Attributes;
            children?: HTMLElement[];
            styles?: Styles;
            events?: Events;
        }
        interface CreateElementArguments<T extends HtmlTag> extends ElementOptions {
            tag: T;
        }
        type HtmlTag = keyof HTMLElementTagNameMap;
        const setOptions: <T extends HTMLElement>(element: T, options?: ElementOptions) => T;
        const createElement: <T extends HtmlTag>(element: CreateElementArguments<T> | HTMLElementTagNameMap[T]) => HTMLElementTagNameMap[T];
        const removeAllChildren: <ParentT extends HTMLElement>(parent: ParentT) => ParentT;
        const appendChild: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: CreateElementArguments<T> | HTMLElementTagNameMap[T]) => ParentT;
        const replaceChild: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, element: CreateElementArguments<T> | HTMLElementTagNameMap[T]) => ParentT;
        const appendChildren: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: (CreateElementArguments<T> | HTMLElementTagNameMap[T])[]) => ParentT;
        const replaceChildren: <ParentT extends HTMLElement, T extends HtmlTag>(parent: ParentT, elements: (CreateElementArguments<T> | HTMLElementTagNameMap[T])[]) => ParentT;
        const getElementsByClassName: <T extends HtmlTag>(tag: T, className: string) => HTMLElementTagNameMap[T][];
        const querySelectorAllWithFallback: <T extends HtmlTag>(tag: T, selectorss: string[]) => HTMLElementTagNameMap[T][];
        const getElementById: <T extends HtmlTag>(tag: T, id: string) => HTMLElementTagNameMap[T];
        const querySelector: <T extends HtmlTag>(tag: T, selectors: string) => HTMLElementTagNameMap[T];
    }
}
declare module "script/fps" {
    export namespace Fps {
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
        export const reset: () => void;
        export const step: (now: number) => void;
        export const getText: () => string;
        export const isUnderFuseFps: () => boolean;
        export {};
    }
}
declare module "script/locale" {
    import localeEn from "resource/lang.en";
    import localeJa from "resource/lang.ja";
    export namespace Locale {
        const master: {
            en: {
                description: string;
                "DELETEME.warningText": string;
                informationFuseFps: string;
                "DELETEME.informationLayers": string;
                "DELETEME.informationPattern": string;
                timeUnitMs: string;
                timeUnitS: string;
                timeUnitM: string;
                timeUnitH: string;
                timeUnitD: string;
                ago: string;
                "Hide UI": string;
                "Play / Pause": string;
                "Switch Pattern (Forward)": string;
                "Switch Pattern (Backward)": string;
                "Switch Coloring (Forward)": string;
                "Switch Coloring (Backward)": string;
                "Increase Canvas Size": string;
                "Decrease Canvas Size": string;
                "Increase Layer": string;
                "Decrease Layer": string;
                "Speed Down": string;
                "Speed Up": string;
                FullScreen: string;
                "Show FPS": string;
            };
            ja: {
                description: string;
                "DELETEME.warningText": string;
                informationFuseFps: string;
                "DELETEME.informationLayers": string;
                "DELETEME.informationPattern": string;
                timeUnitMs: string;
                timeUnitS: string;
                timeUnitM: string;
                timeUnitH: string;
                timeUnitD: string;
                ago: string;
                "Hide UI": string;
                "Play / Pause": string;
                "Switch Pattern (Forward)": string;
                "Switch Pattern (Backward)": string;
                "Switch Coloring (Forward)": string;
                "Switch Coloring (Backward)": string;
                "Increase Canvas Size": string;
                "Decrease Canvas Size": string;
                "Increase Layer": string;
                "Decrease Layer": string;
                "Speed Down": string;
                "Speed Up": string;
                FullScreen: string;
                "Show FPS": string;
            };
        };
        type KeyType = keyof typeof localeEn & keyof typeof localeJa;
        type Type = keyof typeof master;
        const map: (key: KeyType) => string;
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
declare module "script/animation" {
    import { FlounderStyle } from "flounder.style.js/index";
    import control from "resource/control";
    export namespace Animation {
        const startStep: (now: number) => number;
        const makeColor: (step: number, lightness?: number) => FlounderStyle.Type.HexColor;
        const step: (now: number) => void;
        const update: () => void;
        const updatePattern: (newPattern: (typeof control.pattern.enum)[number]) => void;
        const updateColoring: (coloring: (typeof control.coloring.enum)[number]) => void;
        const updateDiagonalSize: () => void;
        const updateCycleSpan: (newCycleSpan: number) => void;
        const updateLayers: (newLayers: number) => void;
        const updateEasing: (enabled: boolean) => void;
    }
}
declare module "script/shortcuts" {
    import shortcuts from "resource/shortcuts";
    export namespace Shortcuts {
        type CommandKey = Exclude<(typeof shortcuts)[number]["onKeyDown"] | (typeof shortcuts)[number]["onKeyUp"], undefined>;
        type CommandMap = {
            [key in Shortcuts.CommandKey]-?: () => void;
        };
        const getDisplayList: () => {
            keys: string[];
            description: string;
        }[];
        const handleKeyEvent: (type: "onKeyDown" | "onKeyUp", event: KeyboardEvent, commandMap: CommandMap) => void;
        const setCommandMap: (commandMap: CommandMap) => void;
    }
}
declare module "script/index" { }
