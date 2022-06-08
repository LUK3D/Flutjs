declare enum FontWeight {
    w100 = 0,
    w200 = 1,
    w300 = 2,
    w400 = 3,
    w500 = 4,
    w600 = 5,
    w700 = 6,
    w800 = 7,
    w900 = 8,
    normal = 9,
    bold = 10
}
export default class _FontWeight {
    value?: string;
    constructor(value: FontWeight);
}
declare class TextDecoration {
    values: {
        none: string;
        underline: string;
        overline: string;
        lineThrough: string;
    };
    none: string;
    underline: string;
    overline: string;
    lineThrough: string;
    constructor(args: {
        none?: string;
        underline?: string;
        overline?: string;
        lineThrough?: string;
    });
}
export { _FontWeight, FontWeight, TextDecoration };
