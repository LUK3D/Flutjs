import { Color } from "./colors.js";
import { _Image } from './Image.js';
declare enum BackgroundScrollBehaviour {
    /**
     * ## fixed
     * Use `bg-fixed `to fix the background image relative to the viewport*/
    fixed = 0,
    local = 1,
    scroll = 2
}
declare enum BackgroundClip {
    borderBox = 0,
    paddingBox = 1,
    contentBox = 2,
    text = 3
}
declare enum BackgroundOrigin {
    borderBox = 0,
    paddingBox = 1,
    contentBox = 2
}
declare enum BackgroundPosition {
    bottom = 0,
    center = 1,
    left = 2,
    leftBottom = 3,
    leftTop = 4,
    right = 5,
    rightBottom = 6,
    rightTop = 7,
    top = 8
}
declare enum BackgroundRepeat {
    repeat = 0,
    noRepeat = 1,
    repeatX = 2,
    repeatY = 3,
    round = 4,
    space = 5
}
declare enum BackgroundSize {
    auto = 0,
    cover = 1,
    contain = 2
}
declare class _Background {
    scrollBehaviour?: BackgroundScrollBehaviour;
    Clip?: BackgroundClip;
    Color?: Color;
    Origin?: BackgroundOrigin;
    Position?: BackgroundPosition;
    Repeat?: BackgroundRepeat;
    Size?: BackgroundSize | string;
    Image?: string | _Image;
    constructor(args: {
        scrollBehaviour: BackgroundScrollBehaviour;
        Clip: BackgroundClip;
        Color: Color;
        Origin: BackgroundOrigin;
        Position: BackgroundPosition;
        Repeat: BackgroundRepeat;
        Size: BackgroundSize | string;
        Image: string | _Image;
    });
}
declare function Background(args: {
    scrollBehaviour: BackgroundScrollBehaviour;
    Clip: BackgroundClip;
    Color: Color;
    Origin: BackgroundOrigin;
    Position: BackgroundPosition;
    Repeat: BackgroundRepeat;
    Size: BackgroundSize | string;
    Image: string | _Image;
}): _Background;
export { Background, _Background, BackgroundScrollBehaviour, BackgroundClip, BackgroundOrigin, BackgroundPosition, BackgroundRepeat, BackgroundSize, };
