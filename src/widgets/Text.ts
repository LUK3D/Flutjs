import { TextStyle, _TextStyle } from "../painting/text_style";
import _Key from "../utils/uuid";
import {Widget } from "./framework";

class  _Text extends Widget {
    constructor(args:{
        text:string, 
        key?:_Key|string,
        textStyle?:_TextStyle
    }){
        super({tagName:"p", key:args.key, text:args.text});
        if(args){
            if(args.textStyle){
                if(args.textStyle.color){
                    this.tag!.style.color = args.textStyle.color;
                }
            }
        }
        return this;
    }
}

function Text(value:string,args?:{textStyle?:_TextStyle}){
   
    return new _Text({text:value, textStyle:args?.textStyle});
}

export{
    Text
}   