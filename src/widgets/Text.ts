import Key from "../utils/uuid";
import {Widget } from "./framework";

class  _Text extends Widget {
    constructor(args:{text:string, key?:Key|string}){
        super({tagName:"p", key:args.key, text:args.text});
        return this;
    }
}

function Text(value:string,args?:{}){
    return new _Text({text:value});
}

export{
    Text
}   