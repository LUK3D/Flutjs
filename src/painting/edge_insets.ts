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

    
    /**
     *  ## Value
     * the string value of EdgeInsets
     */
    value?:string = "";
    constructor(args:{
        bottom?:number|string,
        end?:number|string,
        left?:number|string,
        right?:number|string,
        start?:number|string,
        top?:number|string,
    }) {

        this.bottom= args.bottom;
        this.end= args.end;
        this.left= args.left;
        this.right= args.right;
        this.top= args.top;
        var converter = new Converter();

         this.horizontal = converter.toNumber(this.left)  + converter.toNumber(this.right)+ converter.toNumber(this.start) + converter.toNumber(this.end);
         this.vertical = converter.toNumber(this.top) + converter.toNumber(this.bottom);

         console.log("1.1->", this.arrayed_value("padding-"));
         return this;
        
    }

    /**
     * ## EdgeInsets Value
     * @param propertie The css propertie to be modified (margin, padding), needs to have `-` signe
     * @returns css string propertie-left:value
     */
     val(propertie:string){
        this.value =  [
            `${propertie}left:${this.left}px`,
            `${propertie}right:${this.right}px`,
            `${propertie}top:${this.top}px`,
            `${propertie}bottom:${this.bottom??this.end}px`,

        ].join(";")

        return this;
    }
    arrayed_value(propertie:string){
        
       return  [
            `${this.left}px`,
            `${this.top}px`,
            `${this.right}px`,
            `${this.bottom??this.end}px`,

        ];

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
                return this;
            case Axis.Vertical:
                this.reset();
                this.top = this.vertical;
                this.start = this.vertical;
                this.end = this.vertical;
                this.bottom = this.vertical;
                return this;
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
        return this;
    }
}

class _EdgeInsets extends EdgeInsetsGeometry {
    constructor(args:{
        bottom?:number|string,
        end?:number|string,
        left?:number|string,
        right?:number|string,
        start?:number|string,
        top?:number|string,
        propertie:string
    }){
        super(args)
        return this;
    }


  /** Creates insets with only the given values non-zero.
  *
  * {@tool snippet}
  *
  * Left margin indent of 40 pixels:
  *
  * ```js
  * const EdgeInsets.only({left: 40.0})
  * ```
  * {@end-tool}
  * 
  * */
    only(
        args:{
           left?:string|number,
           top?:string|number,
           right?:string|number,
           bottom?:string|number,
        }
    ){
        var ei = new EdgeInsetsGeometry({
            left :args.left,
            top :args.top,
            right :args.right,
            bottom :args.bottom,
        })
        return ei;
    }


    
    all(val:string|number){

       
        return this.symmetric({
            vertical:val,
            horizontal:val
        });
      
    }

  /** Creates insets with symmetrical vertical and horizontal offsets.
  *
  * Eight pixel margin above and below, no horizontal margins:
  *
  * ```js
  * const EdgeInsets.symmetric({vertical: 8.0})
  * ```
  * */
   symmetric(args:{
    vertical?:number|string,
    horizontal?:number|string,
  }){
        this.reset();
       return this.only({
        left:args.horizontal,
        right:args.horizontal,
        top:args.vertical,
        bottom:args.vertical
    })
       
    } 


}

/** 
 * ## EdgeInsets
* An immutable set of offsets in each of the four cardinal directions.
*
* Typically used for an offset from each of the four sides of a box. For
* example, the padding inside a box can be represented using this class.
*
* The [EdgeInsets] class specifies offsets in terms of visual edges, left,
* top, right, and bottom. These values are not affected by the
* [TextDirection]. To support both left-to-right and right-to-left layouts,
* consider using [EdgeInsetsDirectional], which is expressed in terms of
* _start_, top, _end_, and bottom, where start and end are resolved in terms
* of a [TextDirection] (typically obtained from the ambient [Directionality]).
*
*
* Here are some examples of how to create [EdgeInsets] instances:
*
* Typical eight-pixel margin on all sides:
*
* ```js
* const EdgeInsets.all(8.0)
* ```
*
* Eight pixel margin above and below, no horizontal margins:
*
* ```js
* const EdgeInsets.symmetric({vertical: 8.0})
* ```
*
* Left margin indent of 40 pixels:
*
* ```js
* const EdgeInsets.only({left: 40.0})
* ```
*
* See also:
*
*  * [Padding], a widget that accepts [EdgeInsets] to describe its margins.
*  * [EdgeInsetsDirectional], which (for properties and arguments that accept
*    the type [EdgeInsetsGeometry]) allows the horizontal insets to be
*    specified in a [TextDirection]-aware manner.
*/
var EdgeInsets = new _EdgeInsets({propertie:"padding"});


export{
    EdgeInsetsGeometry,
    EdgeInsets
}