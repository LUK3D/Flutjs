import { Color, Colors } from "../painting/colors.js";
import { EdgeInsets } from "../painting/edge_insets.js";
import { CssProperties } from "../utils/cssprops.js";
import _Key from "../utils/uuid.js";
import Widget from "../widgets/framework.js";
import { Padding } from "../widgets/padding.js";
import { Row } from "../widgets/row.js";

class _AppBar extends Widget {
  constructor(args: {
    key?: _Key;
    leading?: Widget;
    automaticallyImplyLeading?: boolean;
    title?: Widget;
    actions?: Array<Widget>;
    flexibleSpace?: Widget;
    bottom?: number;
    /**
     *  ### Elevation
     * Defines the strangeness of the shadow
     * Values between 0 and 6
     */
    elevation?: number;
    shadowColor?: Color;
    backgroundColor?: Color;
    foregroundColor?: Color;
  }) {
    var children = [];

    if (args.leading) {
      children.push(args.leading);
    }
    if (args.title) {
      children.push(args.title);
    }
    if (args.actions) {
      children = [...children, ...args.actions];
    }
    let shadow = "shadow-none";
    switch (args.elevation) {
      case 1:
        shadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        break;
      case 2:
        shadow =
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
        break;
      case 3:
        shadow =
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        break;
      case 4:
        shadow =
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        break;
      case 5:
        shadow =
          "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        break;
      case 6:
        shadow = "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)";
        break;

      default:
        break;
    }

    super({
      tagName: "div",
      children: [
        Padding({
          padding: EdgeInsets.all(10),
          child: Row({ children: children }),
        }),
      ],
      css: new CssProperties({
        boxShadow: shadow,
        height: "48px",
        width: "100%",
        backgroundColor: Colors.White.value,
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
      }),
    });
    this.tag!.style.backgroundColor = args.backgroundColor?.value ?? "";
    this.tag!.style.color = args.foregroundColor?.value ?? "";
  }
}

/**
 * ## AppBar
 * Creates a material design app bar.
 *
 * The arguments [primary], [toolbarOpacity], [bottomOpacity],
 * [backwardsCompatibility], and [automaticallyImplyLeading] must
 * not be null. Additionally, if [elevation] is specified, it must
 * be non-negative.
 *
 * Typically used in the [Scaffold.appBar] property.
 */
function AppBar(args: {
  key?: _Key;
  leading?: Widget;
  automaticallyImplyLeading?: boolean;
  title?: Widget;
  actions?: Array<Widget>;
  flexibleSpace?: Widget;
  bottom?: number;
  /**
   *  ### Elevation
   * Defines the strangeness of the shadow
   * Values between 0 and 6
   */
  elevation?: number;
  shadowColor?: Color;
  backgroundColor?: Color;
  foregroundColor?: Color;
}): _AppBar {
  return new _AppBar(args);
}

export { AppBar, _AppBar };
