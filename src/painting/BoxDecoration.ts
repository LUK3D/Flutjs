import { BorderRadiusGeometry } from "./BorderRadiusGeometry.js";
import {Color, Colors} from "./colors.js"
class _BoxDecoration {
    color?:string;
    borderRadius?:BorderRadiusGeometry;

    constructor(args:{
        color?:Color, 
        /* If non-null, the corners of this box are rounded by this [BorderRadius].
        *
        * Applies only to boxes with rectangular shapes; ignored if [shape] is not
        * [BoxShape.rectangle].
        *
        * {@macro flutter.painting.BoxDecoration.clip}
        * */
        borderRadius?:BorderRadiusGeometry
    }){
        this.color = args.color?.value;
        this.borderRadius = args.borderRadius;
    }

    

}

function BoxDecoration(args:{color?:Color,borderRadius?:BorderRadiusGeometry}){
    return new _BoxDecoration(args);
}

export{
    BoxDecoration,
    _BoxDecoration
}

