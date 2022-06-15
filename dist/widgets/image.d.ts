import { AlignmentGeometry } from "../painting/alignment.js";
import { BoxFit } from "../painting/boxFit.js";
import { Color } from "../painting/colors.js";
import { ImageRepeat } from "../painting/decorationImage.js";
import { BlendMode } from "../ui/painting.js";
import Widget from "./framework.js";
declare class _Image extends Widget {
    semanticLabel?: string;
    excludeFromSemantics?: boolean;
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
    });
    network(src: string, args: {
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        color?: Color;
        opacity?: number;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        repeat?: ImageRepeat;
    }): this;
}
/**Creates a widget that displays an  obtained from the network. */
declare var Image: () => _Image;
export { Image, _Image };
