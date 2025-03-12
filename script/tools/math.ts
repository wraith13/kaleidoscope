export namespace Math
{
    export const scale = (min: number, max: number) => (r: number) => min + ((max -min) *r);
}
