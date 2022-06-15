import { BorderRadiusGeometry } from "./BorderRadiusGeometry.js";
import { BoxShadow } from "./boxShadow.js";
import {Color, Colors} from "./colors.js"
class _BoxDecoration {
    color?:string;
    borderRadius?:BorderRadiusGeometry;
    boxShadow?:Array<BoxShadow>;
    constructor(args:{
        color?:Color, 
        /* If non-null, the corners of this box are rounded by this [BorderRadius].
        *
        * Applies only to boxes with rectangular shapes; ignored if [shape] is not
        * [BoxShape.rectangle].
        *
        * {@macro flutter.painting.BoxDecoration.clip}
        * */
        borderRadius?:BorderRadiusGeometry,
        /// A list of shadows cast by this box behind the box.
        ///
        /// The shadow follows the [shape] of the box.
        ///
        /// See also:
        ///
        ///  * [kElevationToShadow], for some predefined shadows used in Material
        ///    Design.
        ///  * [PhysicalModel], a widget for showing shadows.
        boxShadow?:Array<BoxShadow>,
    }){
        this.color = args.color?.value;
        this.borderRadius = args.borderRadius;
        this.boxShadow = args.boxShadow;
    }

    

}

function BoxDecoration(args:{color?:Color,borderRadius?:BorderRadiusGeometry, boxShadow?:Array<BoxShadow>}){
    return new _BoxDecoration(args);
}

export{
    BoxDecoration,
    _BoxDecoration
}

