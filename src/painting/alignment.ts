class AlignmentGeometry {
    x?:number;
    y?:number;
    val?:string;
    constructor(args:{x?:number, y?:number}) {
     this.x = args.x;
     this.y = args.y;
     
     this.val = `${this.x} ${this.y}`;
    }

    negative():AlignmentGeometry{
        return new AlignmentGeometry({x:(this.x!*-1), y:(this.y!*-1)});
    }

    add(other:AlignmentGeometry):AlignmentGeometry{
        return new AlignmentGeometry({x:(this.x!+other.x!), y:(this.y!+other.y!)});
    }

    
    multiply(other:AlignmentGeometry):AlignmentGeometry{
        return new AlignmentGeometry({x:(this.x!*other.x!), y:(this.y!*other.y!)});
    }
    
    divide(other:AlignmentGeometry):AlignmentGeometry{
        return new AlignmentGeometry({x:(this.x!/other.x!), y:(this.y!/other.y!)});
    }
}


class Alignment extends AlignmentGeometry {
    /// Creates an alignment.
    ///
    /// The [x] and [y] arguments must not be null.
    constructor(args:{x:number,y:number}){
        super(args)
    }
  
    /**The top left corner. */
    topLeft(){
        return new Alignment({x:-1.0, y:-1.0});
    }

    /**The center point along the top edge. */
    topCenter(){
        return new Alignment({x:0.0, y:-1.0});
    }

    /**The top right corner. */
    topRight(){
        return new Alignment({x:1.0, y:-1.0});
    }
  
    /**The center point along the left edge. */
    centerLeft(){
        return new Alignment({x:-1.0, y:0.0});
    }

    /**The center point, both horizontally and vertically. */
    center(){
        return new Alignment({x:0, y:0});
    }

    /**The center point along the right edge. */
    centerRight(){
        return new Alignment({x:1.0, y:0.0});
    }

    /**The center point along the bottom edge. */
    bottomLeft(){
        return new Alignment({x:-1.0, y:1.0});
    }

    /**The center point along the right edge. */
    bottomCenter(){
        return new Alignment({x:0.0, y:1.0});
    }

    /**The center point along the right edge. */
    bottomRight(){
        return new Alignment({x:1.0, y:1.0});
    }

     add(other:Alignment):AlignmentGeometry {
        return super.add(other);
    }
  
}







export{
    AlignmentGeometry,
    Alignment
}

