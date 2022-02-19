/// Whether to slant the glyphs in the font
enum FontStyle {
  /// Use the upright glyphs
  normal,

  /// Use glyphs designed for slanting
  italic,
}

enum FontWeight{
  w100,
  w200,
  w300,
  w400,
  w500,
  w600,
  w700,
  w800,
  w900,
  normal,
  bold
}

/// The thickness of the glyphs used to draw the text
export default class _FontWeight {

  value?:string;
  // w100:_FontWeight = new _FontWeight(100);
  // w200:_FontWeight= new _FontWeight(200);;
  // w300:_FontWeight= new _FontWeight(300);;
  // w400:_FontWeight= new _FontWeight(400);;
  // w500:_FontWeight= new _FontWeight(500);;
  // w600:_FontWeight= new _FontWeight(600);;
  // w700:_FontWeight= new _FontWeight(700);;
  // w800:_FontWeight= new _FontWeight(800);;
  // w900:_FontWeight= new _FontWeight(900);;

  constructor(value:FontWeight){

    if(value == FontWeight.w100){
      this.value = "100";
      return;
    }
    if(value == FontWeight.w200){
      this.value = "200";
      return;
    }
    if(value == FontWeight.w300){
      this.value = "300";
      return;
    }
    if(value == FontWeight.w400){
      this.value = "400";
      return;
    }
    if(value == FontWeight.w500){
      this.value = "500";
      return;
    }
    
    if(value == FontWeight.w600){
      this.value = "600";
      return;
    }
    if(value == FontWeight.w700){
      this.value = "700";
      return;
    }
    if(value == FontWeight.w800){
      this.value = "800";
      return;
    }
    if(value == FontWeight.w900){
      this.value = "900";
      return;
    }
    
  }

}



class TextDecoration {

    values = {
        none: "none",
        underline: "underline",
        overline: "overline",
        lineThrough: "line-through",
    }

    /// Do not draw a decoration
    none = this.values.none;
    /// Draw a line underneath each line of text
    underline = this.values.underline;
    /// Draw a line above each line of text
    overline = this.values.overline;
    /// Draw a line through each line of text
    lineThrough = this.values.lineThrough;

    constructor(
        args: {
            none?: string,
            underline?: string,
            overline?: string,
            lineThrough?: string
        }
    ) {
        this.none = args.none || this.none;
        this.underline = args.underline || this.underline;
        this.overline = args.overline || this.overline;
        this.lineThrough = args.lineThrough || this.lineThrough;
        return this;
    }


}


export{
  _FontWeight,
  FontWeight,
  TextDecoration
}

