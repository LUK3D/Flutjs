import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import Widget from "./framework.js";
declare class _Column extends Widget {
    constructor(args: {
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        children?: Array<Widget>;
    });
}
/**
 * ## Column Widget
 * Creates a Vertical List Container
 * @param args Columns Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Column({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
declare function Column(args: {
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
    children?: Array<Widget>;
}): _Column;
export { Column };
