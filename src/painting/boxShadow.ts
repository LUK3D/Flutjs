import { BlurStyle } from "../ui/painting.js";
import { Offset, _Offset } from "../utils/offset.js";
import { Color, Colors } from "./colors.js";

class BoxShadow {
    color:Color = Colors.Gray[600];
    offset:_Offset = Offset(0,0).zero();
    blurRadius:number = 0.0;
    spreadRadius:number = 0.0;
    blurStyle?:BlurStyle = BlurStyle.outer;

    constructor(args:{
        color?:Color,
        offset?:_Offset,
        blurRadius?:number,
        spreadRadius?:number,
        blurStyle?:BlurStyle
        
    }) {

        this.color = args.color??this.color;
        this.offset = args.offset??this.offset;
        this.blurRadius = args.blurRadius??this.blurRadius;
        this.spreadRadius = args.spreadRadius??this.spreadRadius;
        this.blurStyle = args.blurStyle??this.blurStyle;
        
    }

    value(){
        return `${this.offset.dx}px ${this.offset.dy}px ${this.blurRadius}px ${this.spreadRadius}px ${this.color.value} ${this.blurStyle}`;
    }
}

export{
    BoxShadow
}