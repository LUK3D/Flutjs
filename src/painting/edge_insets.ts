/** 
Base class for [EdgeInsets] that allows for text-direction aware
resolution.

A property or argument of this type accepts classes created either with [
EdgeInsets.fromLTRB] and its variants, or [
EdgeInsetsDirectional.fromSTEB] and its variants.

To convert an [EdgeInsetsGeometry] object of indeterminate type into a
[EdgeInsets] object, call the [resolve] method.

See also:

 * [Padding], a widget that describes margins using [EdgeInsetsGeometry].

**/

import { Axis } from "../rendering/axis.js";
import { Converter } from "../utils/converter.js";

class EdgeInsetsGeometry {

    bottom?:number|string = 0;
    end?:number|string = 0;
    left?:number|string = 0;
    right?:number|string = 0;
    start?:number|string = 0;
    top?:number|string = 0;
    horizontal?:number|string = 0;
    vertical?:number|string = 0;
    propertie:string;

    

    value?:string = "";
    constructor(args:{
        bottom?:number|string,
        end?:number|string,
        left?:number|string,
        right?:number|string,
        start?:number|string,
        top?:number|string,
        propertie:string
    }) {

        this.bottom= args.bottom;
        this.end= args.end;
        this.left= args.left;
        this.right= args.right;
        this.top= args.top;
        this.propertie = args.propertie;
        var converter = new Converter();
        
         this.horizontal = converter.toNumber(this.left)  + converter.toNumber(this.right)+ converter.toNumber(this.start) + converter.toNumber(this.end);
         this.vertical = converter.toNumber(this.top) + converter.toNumber(this.bottom);
        
    }

     val(){
        this.value =  [
            `${this.propertie}-left:${this.left}`,
            `${this.propertie}-right:${this.right}`,
            `${this.propertie}-top:${this.top}`,
            `${this.propertie}-bottom:${this.bottom??this.end}`,

        ].join(";")

        return this;
    
    }

    reset(){
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        this.start = 0;
        this.end = 0;
    }

    along(args:{axis:Axis}){
       
        switch (args.axis) {
            case Axis.Horizontal:
                this.reset();
                this.left = this.horizontal;
                this.right = this.horizontal;
                this.start = this.horizontal;
                this.end = this.horizontal;
                return this.val();
            case Axis.Vertical:
                this.reset();
                this.top = this.vertical;
                this.start = this.vertical;
                this.end = this.vertical;
                this.bottom = this.vertical;
                return this.val();
            default:
                break;
        }
        
    }

    infinity():EdgeInsetsGeometry{
        this.bottom= "100%";
        this.end= "100%";
        this.left= "100%";
        this.right= "100%";
        this.top= "100%";
        return this.val();
    }
}