import { Color } from "./colors.js";
import { _Image } from './Image.js'
enum BackgroundScrollBehaviour {
    /** 
     * ## fixed
     * Use `bg-fixed `to fix the background image relative to the viewport*/
    fixed,
    local,
    scroll
}
enum BackgroundClip {
    borderBox,
    paddingBox,
    contentBox,
    text
}
enum BackgroundOrigin {
    borderBox,
    paddingBox,
    contentBox
}
enum BackgroundPosition {
    bottom,
    center,
    left,
    leftBottom,
    leftTop,
    right,
    rightBottom,
    rightTop,
    top
}
enum BackgroundRepeat {
    repeat,
    noRepeat,
    repeatX,
    repeatY,
    round,
    space

}
enum BackgroundSize {
    auto,
    cover,
    contain
}




class _Background {

    scrollBehaviour?: BackgroundScrollBehaviour;
    Clip?: BackgroundClip;
    Color?: Color;
    Origin?: BackgroundOrigin;
    Position?: BackgroundPosition;
    Repeat?: BackgroundRepeat;
    Size?: BackgroundSize | string;
    Image?: string | _Image;

    constructor(
        args: {
            scrollBehaviour: BackgroundScrollBehaviour,
            Clip: BackgroundClip,
            Color: Color,
            Origin: BackgroundOrigin,
            Position: BackgroundPosition,
            Repeat: BackgroundRepeat,
            Size: BackgroundSize | string,
            Image: string | _Image,

        }
    ) {

        this.scrollBehaviour = args.scrollBehaviour;
        this.Clip = args.Clip;
        this.Color = args.Color;
        this.Origin = args.Origin;
        this.Position = args.Position;
        this.Repeat = args.Repeat;
        this.Size = args.Size;
        this.Image = args.Image;

    }
}

function Background(args: {
    scrollBehaviour: BackgroundScrollBehaviour,
    Clip: BackgroundClip,
    Color: Color,
    Origin: BackgroundOrigin,
    Position: BackgroundPosition,
    Repeat: BackgroundRepeat,
    Size: BackgroundSize | string,
    Image: string | _Image,

}){
    return new _Background(args);
}


export {
    Background,
    _Background,
    BackgroundScrollBehaviour,
    BackgroundClip,
    BackgroundOrigin,
    BackgroundPosition,
    BackgroundRepeat,
    BackgroundSize,
}