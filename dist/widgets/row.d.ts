import Widget from "./framework.js";
declare class _Row extends Widget {
    constructor(args: {
        children?: Array<Widget>;
    });
}
/**
 * ## Row Widget
 * Creates a Horizontal List Container
 * @param args Rows Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Row({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
declare function Row(args: {
    children?: Array<Widget>;
}): _Row;
export { Row };
