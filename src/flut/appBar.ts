import { BoxDecoration } from "../painting/BoxDecoration.js";
import { Color, Colors } from "../painting/colors.js";
import { EdgeInsets } from "../painting/edge_insets.js";
import { CssProperties } from "../utils/cssprops.js";
import { Elevation } from "../utils/Elevations.js";
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
    let shadow = Elevation[0];
    switch (args.elevation) {
      case 1:
        shadow = Elevation[1];
        break;
      case 2:
        shadow = Elevation[2];
        break;
      case 3:
        shadow = Elevation[3];
        break;
      case 4:
        shadow = Elevation[4];
        break;
      case 5:
        shadow = Elevation[5];
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
        height: "48px",
        width: "100%",
        backgroundColor: Colors.White.value,
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
      }),
      boxDecoration:BoxDecoration({
        boxShadow:shadow
      })
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
