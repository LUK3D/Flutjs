import Widget from "./framework.js";

class _Row extends Widget {
  constructor(args: { children?: Array<Widget> }) {
    super({
      tagName: "div",
      children: args.children,
      classes:['flex','flex-row','w-full','h-full']
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
function Row(args: { children?: Array<Widget> }) {
  return new _Row(args);
}
export { Row };
