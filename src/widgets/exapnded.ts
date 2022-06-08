import _Key from "../utils/uuid.js";
import Widget from "./framework.js";

class _Expanded extends Widget{

    constructor(args:{
        key?:_Key,
        child:Widget
    }){
        super({
            key:args.key,
            tagName:"div",
            child:args.child
        });
        if(this.child){
            this.tag = this.child.tag;
        }
        this.tag!.style.width = "100%";
        this.tag!.style.height = "100%";
        args.child.tag!.style.width = "100%";
        args.child.tag!.style.height = "100%";
    }
}

function Expanded(args:{
    key?:_Key,
    child:Widget,
}){
    return new _Expanded(args);
}

export{
    Expanded
}