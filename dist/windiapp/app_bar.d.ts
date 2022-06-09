import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import Widget from "../widgets/framework.js";
declare class _AppBar extends Widget {
    constructor(args: {
        key?: _Key;
        leading?: Widget;
        automaticallyImplyLeading?: boolean;
        title?: Widget;
        actions?: Array<Widget>;
        flexibleSpace?: Widget;
        bottom?: number;
        elevation?: number;
        shadowColor?: Color;
        backgroundColor?: Color;
        foregroundColor?: Color;
    });
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
declare function AppBar(args: {
    key?: _Key;
    leading?: Widget;
    automaticallyImplyLeading?: boolean;
    title?: Widget;
    actions?: Array<Widget>;
    flexibleSpace?: Widget;
    bottom?: number;
    elevation?: number;
    shadowColor?: Color;
    backgroundColor?: Color;
    foregroundColor?: Color;
}): _AppBar;
export { AppBar, _AppBar };
