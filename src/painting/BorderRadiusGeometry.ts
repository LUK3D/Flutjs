import { Radius, _Radius } from "../ui/Radius.js";

class BorderRadiusGeometry {
  topLeft?: _Radius;
  topRight?: _Radius;
  bottomLeft?: _Radius;
  bottomRight?: _Radius;
  topStart?: _Radius;
  topEnd?: _Radius;
  bottomStart?: _Radius;
  bottomEnd?: _Radius;
  value?: Array<string>;
}

/** Creates a border radius with only the given non-zero values. The other
  corners will be right angles.
  */
class _BorderRadius extends BorderRadiusGeometry {
  topLeft?: _Radius;
  topRight?: _Radius;
  bottomLeft?: _Radius;
  bottomRight?: _Radius;
  

  only(args: {
    topLeft?: _Radius;
    topRight?: _Radius;
    bottomLeft?: _Radius;
    bottomRight?: _Radius;
  }) {
    this.topLeft = args.topLeft;
    this.topRight = args.topRight;
    this.bottomLeft = args.bottomLeft;
    this.bottomRight = args.bottomRight;

    this.value = [
      this.topLeft?.value ?? "0px",
      this.topRight?.value ?? "0px",
      this.bottomLeft?.value ?? "0px",
      this.bottomRight?.value ?? "0px",
    ];

    console.warn(this.value);

    return this;
  }
/** Creates a border radius where all radii are [radius]. */
  all(radius: _Radius) {
    return this.only({
      topLeft: radius,
      topRight: radius,
      bottomLeft: radius,
      bottomRight: radius,
    });
  }

  /** Creates a border radius where all radii are [Radius.circular(radius)]. */
  circular(radius:number){
    return this.all(
        Radius.circular(radius),
      );
  }

/**
 * Creates a vertically symmetric border radius where the top and bottom
 * sides of the rectangle have the same radii.
 */
   vertical(args:{
    top?:_Radius,
    bottom?:_Radius,
  }){

    console.warn("vertical",args.top, args.bottom);
    return  this.only(
        {
        topLeft: args.top??Radius.zero,
        topRight: args.top??Radius.zero,
        bottomLeft: args.bottom??Radius.zero,
        bottomRight: args.bottom??Radius.zero,
        }
      );
  }


  /**
   * Creates a horizontally symmetrical border radius where the left and right
    sides of the rectangle have the same radii.
  
   */
  horizontal(args:{
     left?:_Radius,
     right?:_Radius,
  }){
    return this.only(
       {
        topLeft: args.left??Radius.zero,
        topRight: args.right??Radius.zero,
        bottomLeft: args.left??Radius.zero,
        bottomRight: args.right??Radius.zero,
       }
      );
  }


}

let BorderRadius = new _BorderRadius();

export { BorderRadiusGeometry,BorderRadius,_BorderRadius };
