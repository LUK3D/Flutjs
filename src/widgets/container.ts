import { _BoxDecation } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import { isNumber } from "../utils/validator";
import {Widget } from "./framework.js";
import { WidgetExeption } from "../utils/FlutExeption.js";
import { AbsoluteUnits, RelativeUnits } from "../index.js";

class  _Container extends Widget {
    constructor(args:{
        key?:_Key|string,
        child?:Widget, 
        width?:number|string,
        height?:number|string,
        color?:Color,
        decoratio?:_BoxDecation,
    
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width
         *
         * {@link AbsoluteUnits} or {@link AbsoluteUnits}
         */
        width_size_measurement_unit?:AbsoluteUnits|RelativeUnits;
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Height
         * 
         * {@link AbsoluteUnits} or {@link AbsoluteUnits}
         */
        height_size_measurement_unit?:AbsoluteUnits|RelativeUnits;
    }){
        super({tagName:"div",...args, });

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
    decoratio?:_BoxDecation,
    /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width
         *
         * {@link AbsoluteUnits} or {@link AbsoluteUnits}
         */
     width_size_measurement_unit?:AbsoluteUnits|RelativeUnits;
     /**
      * ### Size Measurement unit
      * Defines the Units measurement of Height
      * 
      * {@link AbsoluteUnits} or {@link AbsoluteUnits}
      */
     height_size_measurement_unit?:AbsoluteUnits|RelativeUnits;
}){
    if(args.color!=null && args.decoratio!=null){
        WidgetExeption({message:"The property Color needs to be null when decoration:<BoxDecoration> its been in use. Try to put the Color inside the BoxDecoration."});
    }
    if(!args.width){
        args.width = "auto";
    }
    if(!args.height){
        args.height = "auto";
    }

    return new _Container(args);
}

export{
    Container,
    _Container
}   