import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { Widget } from "./framework.js";

class _Padding extends Widget {
    constructor(args:{
        padding:EdgeInsetsGeometry,
        child:Widget|undefined
    }) {
        super({tagName:"div", 
        child:args.child,
        padding:args.padding
        
        })
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