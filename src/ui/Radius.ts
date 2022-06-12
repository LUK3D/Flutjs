/**A radius for either circular or elliptical shapes. */
class _Radius {

    value?:string;
    /** 
    * A radius with [x] and [y] values set to zero.
    *
    * You can use [Radius.zero] with [RRect] to have right-angle corners.
    * */
    zero = this.circular(0);
   
   /** Constructs a circular radius. [x] and [y] will have the same radius value.*/
  circular(radius:number):_Radius{
    return this.elliptical(radius, radius)
  }

  /** Constructs an elliptical radius with the given radii. */
  elliptical(x:number, y:number):_Radius{
    this.value = `border-radius: ${x}px ${y}px;`;
    return this;
  }

}

/**
 * ## Radius
 * A radius for either circular or elliptical shapes 
 * */
var Radius = new _Radius();

export{
    Radius,
    _Radius
}