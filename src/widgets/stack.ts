import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import { RelativeUnits } from "../rendering/mesurementes.js";
import { Converter } from "../utils/converter.js";
import { CssProperties } from "../utils/cssprops.js";
import Widget from "./framework.js";

class _Stack extends Widget {
  constructor(args: {
    children?: Array<Widget>;
  }) {
    super({
      tagName: "div",
      children: args.children,
      width:100,
      height:100,
      width_size_measurement_unit:RelativeUnits["%"],
      height_size_measurement_unit:RelativeUnits["%"],
      css: new CssProperties({
        flexDirection: "Stack",
        position:"relative"
       
      }),
    });
  }
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
function Stack(args: {
  children?: Array<Widget>;
}) {
  return new _Stack(args);
}
export { Stack };
