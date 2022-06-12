import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import { Converter } from "../utils/converter.js";
import Widget from "./framework.js";

class _Column extends Widget {
  constructor(args: { 
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children?: Array<Widget> }) {
    super({
       
      
      tagName: "div",
      children: args.children,
      classes:['flex','flex-col',
      args.mainAxisAlignment??new Converter().invertFlex(MainAxisAlignment.start),
      args.crossAxisAlignment??new Converter().invertFlex(CrossAxisAlignment.start)
    
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
