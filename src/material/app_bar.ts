import { Color } from "../painting/colors";
import Key from "../utils/uuid";
import Widget from "../widgets/framework";

class _AppBar extends Widget {

    constructor(args: {
        key?: Key,
        leading?: Widget,
        automaticallyImplyLeading?: boolean,
        title?: Widget,
        actions?: Array<Widget>,
        flexibleSpace?: Widget,
        bottom?: number,
        elevation?: number,
        shadowColor?: Color,
        backgroundColor?: Color,
        foregroundColor?: Color,

    }) {
        var children = [];

        if(args.leading){
            children.push(args.leading);
        }
        if(args.title){
            children.push(args.title);
        }
        if(args.actions){
            children =  [...children, ...args.actions];
        }

        super({ tagName: "div", children:children });
    }


}

/** Creates a material design app bar.
*
* The arguments [primary], [toolbarOpacity], [bottomOpacity],
* [backwardsCompatibility], and [automaticallyImplyLeading] must
* not be null. Additionally, if [elevation] is specified, it must
* be non-negative.
*
* Typically used in the [Scaffold.appBar] property.
*/
function AppBar(
    args: {
        key?: Key,
        leading?: Widget,
        automaticallyImplyLeading?: boolean,
        title?: Widget,
        actions?: Array<Widget>,
        flexibleSpace?: Widget,
        bottom?: number,
        elevation?: number,
        shadowColor?: Color,
        backgroundColor?: Color,
        foregroundColor?: Color,

    }
):_AppBar{

    return new _AppBar(args);

}

export{
    AppBar,
    _AppBar
}