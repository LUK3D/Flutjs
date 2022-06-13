import Widget from "./framework.js";
declare class _Stack extends Widget {
    constructor(args: {
        children?: Array<Widget>;
    });
}
/**
 * ## Stack Widget
 * Creates a Vertical List Container
 * @param args Stacks Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Stack({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
declare function Stack(args: {
    children?: Array<Widget>;
}): _Stack;
export { Stack };
