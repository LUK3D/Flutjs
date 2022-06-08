import { Color } from "../painting/colors.js";

class IconThemeData{

    color:Color;
    opacity:number;
    size:number;

    constructor(args:{
        color:Color,  opacity:number, size:number
    }){

        this.color = args.color;
        this.opacity  =  args.opacity;
        this.size = args.size;

    }


     copyWith(args:{ color?:Color, opacity?:number, size?:number }) {
        return new IconThemeData(
          {
          color: args.color || this.color,
            opacity: args.opacity || this.opacity,
            size: args.size || this.size,
          }
        );
      }
}


export{
    IconThemeData
}