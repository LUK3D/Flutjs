import { Color } from "../painting/colors.js";
import { EdgeInsets } from "../painting/edge_insets.js";
import _Key from "../utils/uuid.js";
import Widget from "../widgets/framework.js";
import { Padding } from "../widgets/padding.js";
import { Row } from "../widgets/row.js";

class _AppBar extends Widget {

    constructor(args: {
        key?: _Key,
        leading?: Widget,
        automaticallyImplyLeading?: boolean,
        title?: Widget,
        actions?: Array<Widget>,
        flexibleSpace?: Widget,
        bottom?: number,
        /**
         *  ### Elevation
         * Defines the strangeness of the shadow
         * Values between 0 and 6
         */
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
        let shadow = "shadow-none";
        switch (args.elevation) {
            case 1:
                shadow = "shadow-sm";
                break;
            case 2:
                shadow = "shadow";
                break;
            case 3:
                shadow = "shadow-md";
                break;
            case 4:
                shadow = "shadow-lg";
                break;
            case 5:
                shadow = "shadow-xl";
                break;
            case 6:
                shadow = "shadow-2xl";
                break;
        
            default:
                break;
        }


        super({ tagName: "div", children:[Padding(
            {
                padding:EdgeInsets.all(10),
                child:Row({children:children})
            }
           
        )],  classes:[
            "h-12",
            "w-full",
            shadow,
            "shadow-gray-600",
            "bg-white",
            "fixed",
            "top-0",
            "left-0",
            "flex",
            "items-center"
        ] });
        this.tag!.style.backgroundColor = args.backgroundColor?.value??''
        this.tag!.style.color = args.foregroundColor?.value??''
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
function AppBar(
    args: {
        key?: _Key,
        leading?: Widget,
        automaticallyImplyLeading?: boolean,
        title?: Widget,
        actions?: Array<Widget>,
        flexibleSpace?: Widget,
        bottom?: number,
        /**
         *  ### Elevation
         * Defines the strangeness of the shadow
         * Values between 0 and 6
         */
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