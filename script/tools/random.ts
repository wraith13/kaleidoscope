export namespace Random
{
    export const makeInteger = (size: number, index?: number, random: (index?: number) => number = Math.random) =>
        Math.floor(random(index) *size);
    export const select = <T>(list: T[], index?: number, random: (index?: number) => number = Math.random): T =>
        list[makeInteger(list.length, index, random)];
    export class IndexedRandom
    {
        public index: number = 0;
        constructor(private hash32: (key: string) => number, private seed: number | string, private prime: number = 31)
            { }
        public get = (index?: number): number =>
            this.hash32(`${this.seed}:${this.prime *(index ?? (this.index++))}`) /0xFFFFFFFF;
    }
}
