import { _BoxDecation } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import { isNumber } from "../utils/validator";
import {Widget } from "./framework.js";
import { WidgetExeption } from "../utils/FlutExeption.js";

class  _Container extends Widget {
    constructor(args:{
        key?:_Key|string,
        child?:Widget, 
        width?:number|string,
        height?:number|string,
        color?:Color,
        decoratio?:_BoxDecation
    }){
        super({tagName:"div",...args});

        if(args.decoratio){
            this.tag!.style.backgroundColor = args.decoratio?.color??'';
        }else{
            this.tag!.style.backgroundColor = args.color?.value??'';
        }
        

        return this;
    }
}

function Container(args:{
    key?:_Key|string,
    child?:Widget,
    width?:number|string,
    height?:number|string,
    color?:Color,
    decoratio?:_BoxDecation
}){
    if(args.color!=null && args.decoratio!=null){
        WidgetExeption({message:"The propertie Color needs to be null when decoration:<BoxDecoration> its been in use. Try to put the Color inside the BoxDecoration."});
    }
    if(!args.width){
        args.width = 100;
    }
    if(!args.height){
        args.height = 100;
    }

    return new _Container(args);
}

export{
    Container,
    _Container
}   