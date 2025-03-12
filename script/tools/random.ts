export namespace Random
{
    export const makeInteger = (size: number) => Math.floor(Math.random() *size);
    export const select = <T>(list: T[]): T => list[makeInteger(list.length)];
}
