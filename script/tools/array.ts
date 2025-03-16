import { TypeGuards } from "@library/type-guards";
export namespace Array
{
    export const cycleSelect = <T>(list: T[], ix: number): T => list[ix %list.length];
    export const joinable = <T>(value: T, condition?: boolean) =>
        TypeGuards.hasValue(value) && (condition ?? true) ? [ value, ]: [];
    export const uniqueFilter = <T>(i: T, ix:number, list: T[]) =>
        ix === list.indexOf(i);
}
