import { AlignmentGeometry } from "../painting/alignment.js";
import { BoxFit } from "../painting/boxFit.js";
import { Color } from "../painting/colors.js";
import { ImageRepeat } from "../painting/decorationImage.js";
import { BlendMode } from "../ui/painting.js";
import { CssProperties } from "../utils/cssprops.js";
import Widget from "./framework.js";

class _Image extends Widget {
  semanticLabel?: string;
  excludeFromSemantics?: boolean = false;
  color?: Color;
  opacity?: number;
  colorBlendMode?: BlendMode;
  fit?: BoxFit;
  alignment?: AlignmentGeometry;
  repeat?: ImageRepeat;

  constructor(args: {
    semanticLabel?: string;
    excludeFromSemantics?: boolean;
    color?: Color;
    opacity?: number;
    colorBlendMode?: BlendMode;
    fit?: BoxFit;
    alignment?: AlignmentGeometry;
    repeat?: ImageRepeat;
  }) {
    super({ tagName: "img" });
  }

  /// Creates a widget that displays an [ImageStream] obtained from the network.
  ///
  /// The [src] argument must not be null.
  network(
    src: string,
    args: {
        
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      color?: Color;
      opacity?: number;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
    }
  ) {
    this.tag!.setAttribute("src", src);
    if (args.semanticLabel) this.tag!.setAttribute("label", args.semanticLabel);
    this.css = new CssProperties({
        backgroundColor: args.color?.value,
        opacity: args.opacity?.toString(),
        objectFit: args.fit,
        backgroundRepeat: args.repeat,
        width:"100%",
        height:"100%"
      });

    if (args.semanticLabel) {
      this.tag!.setAttribute("label", args.semanticLabel);
    }
    
    this.css!.apply(this)
    return this;
  }
}

/**Creates a widget that displays an  obtained from the network. */
  function Image(){
  return new _Image({});
};


export{
    Image,
    _Image
}

