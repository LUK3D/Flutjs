import Key from "../utils/uuid";
import Widget from "./framework";

class _Expanded extends Widget{

    constructor(args:{
        key?:Key,
        child:Widget
    }){
        super({
            key:args.key,
            tagName:"div",
            child:args.child
        });
        this.tag!.style.width = "100%";
        this.tag!.style.height = "100%";
        args.child.tag!.style.width = "100%";
        args.child.tag!.style.height = "100%";
    }
}

function Expanded(args:{
    key?:Key,
    child:Widget,
}){
    return new _Expanded(args);
}

export{
    Expanded
}