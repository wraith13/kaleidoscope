export namespace Array
{
    export const cycleSelect = <T>(list: T[], ix: number): T => list[ix %list.length];
}
