import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { ElementSides } from "../utils/constants.js";
import { AddAttr } from "../utils/domHelper.js";
import { Widget } from "./framework.js";

class _Padding extends Widget {
    constructor(args:{
        padding:EdgeInsetsGeometry,
        child:Widget|undefined
    }) {
        super({tagName:"div", child:args.child})
        
        ElementSides.forEach((element,i) => {
            this.tag?.style.setProperty("padding-"+element, args.padding.arrayed_value("padding")[i]);
        });
    }
}

function Padding(args:{
    padding:EdgeInsetsGeometry,
    child:Widget|undefined
}){
    return new _Padding(
        {child:args.child, padding:args.padding}
    )
}


export{
    Padding
}