import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import Widget from "./framework.js";

class _Row extends Widget {
  constructor(args: { 
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children?: Array<Widget> }) {
    super({
      tagName: "div",
      children: args.children,
      classes:['flex','flex-row',
      args.mainAxisAlignment??MainAxisAlignment.start,
      args.crossAxisAlignment??CrossAxisAlignment.start
    ]
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
  children?: Array<Widget> }) {
  return new _Row(args);
}
export { Row };
