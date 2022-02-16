import { TextStyle } from "../painting/text_style";
import Key from "../utils/uuid";
import {Widget } from "./framework";

class  _Text extends Widget {
    constructor(args:{
        text:string, 
        key?:Key|string,
        textStyle?:TextStyle
    }){
        super({tagName:"p", key:args.key, text:args.text});
        if(args.textStyle!.color){
            this.tag!.style.color = args.textStyle!.color;
        }
        return this;
    }
}

function Text(value:string,args?:{textStyle?:TextStyle}){
    return new _Text({text:value});
}

export{
    Text
}   