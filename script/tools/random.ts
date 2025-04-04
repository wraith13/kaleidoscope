export namespace Random
{
    export const makeInteger = (size: number, random: () => number = Math.random) =>
        Math.floor(random() *size);
    export const select = <T>(list: T[], random: () => number = Math.random): T =>
        list[makeInteger(list.length, random)];
    export class IndexedRandom
    {
        public index: number = 0;
        constructor(private hash: (key: string) => number, private seed: number | string, private prime: number = 31)
        {
        }
        public get(index?: number): number
        {
            const key = `${this.seed}:${this.prime *(index ?? (this.index++))}`;
            const hash = this.hash(key);
            return hash /0xFFFFFFFF;
        }
    }
}
