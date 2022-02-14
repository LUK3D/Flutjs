import Key from "../utils/uuid";
import {Widget, ExtendedWidget } from "./framework";

class  _Container extends Widget {
    constructor(args:{child?:Widget|ExtendedWidget, key?:Key|string}){
        super({tagName:"div", key:args.key});
        return this;
    }
}

function Container(args:{child?:Widget|ExtendedWidget,key?:Key|string}){
    return new _Container({child:args.child,key:args.key});
}

export{
    Container
}   