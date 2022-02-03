import {Widget, ExtendedWidget } from "./framework";

class  _Container extends Widget {
    constructor(args:{child?:Widget|ExtendedWidget}){
        super({tagName:"div"});
        return this;
    }
}

function Container(args:{child?:Widget|ExtendedWidget}){
    return new _Container({child:args.child});
}

export{
    Container
}   