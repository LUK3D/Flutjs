import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import { CssProperties } from "../utils/cssprops.js";
import Widget from "./framework.js";

class _Row extends Widget {
  constructor(args: { 
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children?: Array<Widget|undefined> }) {
    super({
      tagName: "div",
      children: args.children,
   
    css: new CssProperties({
      display: "flex",
      flexDirection: "row",
      justifyContent:
      args.mainAxisAlignment??MainAxisAlignment.start,
      alignItems:args.crossAxisAlignment??CrossAxisAlignment.start
    }),
    });
  }
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
function Row(args: { 
  mainAxisAlignment?:MainAxisAlignment,
  crossAxisAlignment?:CrossAxisAlignment,
  children?: Array<Widget|undefined> }) {
  return new _Row(args);
}
export { Row };
