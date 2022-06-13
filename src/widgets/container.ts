import { _BoxDecoration } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import {Widget } from "./framework.js";
import { WidgetExeption } from "../utils/FlutExeption.js";
import { AbsoluteUnits, RelativeUnits } from "../index.js";
import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { ElementSides } from "../utils/constants.js";

class  _Container extends Widget {
    constructor(args:{
        key?:_Key|string,
        child?:Widget, 
        width?:number|string,
        height?:number|string,
        color?:Color,
        boxDecoration?:_BoxDecoration,
        margin?:EdgeInsetsGeometry,
        padding?:EdgeInsetsGeometry,
    
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

        let paddings = args.padding?.arrayed_value("padding");
        console.warn("PADDINGS",paddings);
        if(paddings){
            ElementSides.forEach((element,i) => {
                let p = "padding-"+element;
                let v = paddings![i];
                this.tag?.style.setProperty(p,v);
            });
        }
        let margins = args.margin?.arrayed_value("margin");
        if(margins){
            ElementSides.forEach((element,i) => {
                let p = "margin-"+element;
                let v = margins![i];
                this.tag?.style.setProperty(p,v);
            });
        }

        

        return  this;
    }
}

function Container(args:{
    key?:_Key|string,
    child?:Widget,
    width?:number|string,
    height?:number|string,
    color?:Color,
    decoration?:_BoxDecoration,
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
    /**Empty space to surround the [decoration] and [child]. */
     margin?:EdgeInsetsGeometry,
    /**
     * Empty space to inscribe inside the [decoration]. The [child], if any, is
     *  placed inside this padding.
     * 
     *  This padding is in addition to any padding inherent in the [decoration];
     *  see [Decoration.padding].
     */
    padding?:EdgeInsetsGeometry,
}){
    if(args.color!=null && args.decoration!=null){
        WidgetExeption({message:"The property Color needs to be null when decoration:<BoxDecoration> its been in use. Try to put the Color inside the BoxDecoration."});
    }else{
        if(args.color){
            if(args.decoration){
                args.decoration.color = args.color.value;
            }
        }
    }
    if(!args.width){
        args.width = "auto";
    }
    if(!args.height){
        args.height = "auto";
    }
    

    return new _Container({
      
        margin:args.margin,
  
        padding:args.padding,
        child:args.child, 
        color:args.color, 
        boxDecoration:args.decoration, 
        height:args.height,
        width:args.width,
        key:args.key,
        height_size_measurement_unit:args.height_size_measurement_unit,
        width_size_measurement_unit:args.width_size_measurement_unit
    });
}

export{
    Container,
    _Container
}   