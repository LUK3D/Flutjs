import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { ElementSides } from "../utils/constants.js";
import { AddAttr } from "../utils/domHelper.js";
import { Widget } from "./framework.js";

class _Padding extends Widget {
    constructor(args:{
        padding:EdgeInsetsGeometry,
        child:Widget|undefined
    }) {
        super({tagName:"div", child:args.child,classes:["w-full","h-full"]})

        let values = args.padding.arrayed_value("padding");
        console.log(values);
        
        ElementSides.forEach((element,i) => {
            let p = "padding-"+element;
            let v = values[i];
            this.tag?.style.setProperty(p,v);
        });
    }
}

function Padding(args:{
    padding:EdgeInsetsGeometry,
    child:Widget|undefined
}){
    console.log("1->",args.padding.arrayed_value("padding-"));
    return new _Padding(
        {child:args.child, padding:args.padding}
    )
}


export{
    Padding
}