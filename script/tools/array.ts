import { TypeGuards } from "@library/type-guards";
export namespace Array
{
    export const cycleSelect = <T extends unknown[], Index extends number>(list: T, ix: Index) =>
        (
            0 < list.length ?
                list[((ix %list.length) +list.length) %list.length]:
                undefined
        ) as T[Index] extends never ? undefined: T[Index];
    export const joinable = <T>(value: T, condition?: boolean) =>
        TypeGuards.hasValue(value) && (condition ?? true) ? [ value, ]: [];
    export const uniqueFilter = <T>(i: T, ix:number, list: T[]) =>
        ix === list.indexOf(i);
}
