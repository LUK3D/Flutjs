declare class Converter {
    val?: string | number;
    constructor();
    toNumber(val?: string | number): number;
    invertFlex(val: string): string;
}
export { Converter };
