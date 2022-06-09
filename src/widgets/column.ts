import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import Widget from "./framework.js";

class _Column extends Widget {
  constructor(args: { 
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children?: Array<Widget> }) {
    super({
       
      
      tagName: "div",
      children: args.children,
      classes:['flex','flex-col','w-full','h-full',
      args.mainAxisAlignment??MainAxisAlignment.start,
      args.crossAxisAlignment??CrossAxisAlignment.start
    
      ]
    });
  }
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
function Column(args: {
  mainAxisAlignment?:MainAxisAlignment,
  crossAxisAlignment?:CrossAxisAlignment,
  children?: Array<Widget> }) {
  return new _Column(args);
}
export { Column };
