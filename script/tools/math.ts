export namespace Math
{
    export const scale = (min: number, max: number) =>
        (r: number) => min + ((max -min) *r);
    export const sum = (numbers: number[]): number =>
        numbers.reduce((a, v) => a + v, 0);
}
