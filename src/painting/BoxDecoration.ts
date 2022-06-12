import { BorderRadiusGeometry } from "./BorderRadiusGeometry.js";
import {Color, Colors} from "./colors.js"
class _BoxDecation {
    color?:string;

    constructor(args:{
        color?:Color, 
        /* If non-null, the corners of this box are rounded by this [BorderRadius].
        *
        * Applies only to boxes with rectangular shapes; ignored if [shape] is not
        * [BoxShape.rectangle].
        *
        * {@macro flutter.painting.BoxDecoration.clip}
        * */
        derRadius?:BorderRadiusGeometry
    }){
        this.color = args.color?.value;
    }

    

}

function BoxDecation(args:{color?:Color,borderRadius?:BorderRadiusGeometry}){
    return new _BoxDecation(args);
}

export{
    BoxDecation,
    _BoxDecation
}

