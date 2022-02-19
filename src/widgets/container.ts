import _Key from "../utils/uuid";
import { isNumber } from "../utils/validator";
import {Widget } from "./framework";

class  _Container extends Widget {
    constructor(args:{
        key?:_Key|string,
        child?:Widget, 
        width?:number,
        height?:number
    }){
        super({tagName:"div",...args});
        

        return this;
    }
}

function Container(args:{
    key?:_Key|string,
    child?:Widget,
    width?:number,
    height?:number
}){
    return new _Container(args);
}

export{
    Container,
    _Container
}   