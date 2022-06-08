var BackgroundScrollBehaviour;
(function (BackgroundScrollBehaviour) {
    /**
     * ## fixed
     * Use `bg-fixed `to fix the background image relative to the viewport*/
    BackgroundScrollBehaviour[BackgroundScrollBehaviour["fixed"] = 0] = "fixed";
    BackgroundScrollBehaviour[BackgroundScrollBehaviour["local"] = 1] = "local";
    BackgroundScrollBehaviour[BackgroundScrollBehaviour["scroll"] = 2] = "scroll";
})(BackgroundScrollBehaviour || (BackgroundScrollBehaviour = {}));
var BackgroundClip;
(function (BackgroundClip) {
    BackgroundClip[BackgroundClip["borderBox"] = 0] = "borderBox";
    BackgroundClip[BackgroundClip["paddingBox"] = 1] = "paddingBox";
    BackgroundClip[BackgroundClip["contentBox"] = 2] = "contentBox";
    BackgroundClip[BackgroundClip["text"] = 3] = "text";
})(BackgroundClip || (BackgroundClip = {}));
var BackgroundOrigin;
(function (BackgroundOrigin) {
    BackgroundOrigin[BackgroundOrigin["borderBox"] = 0] = "borderBox";
    BackgroundOrigin[BackgroundOrigin["paddingBox"] = 1] = "paddingBox";
    BackgroundOrigin[BackgroundOrigin["contentBox"] = 2] = "contentBox";
})(BackgroundOrigin || (BackgroundOrigin = {}));
var BackgroundPosition;
(function (BackgroundPosition) {
    BackgroundPosition[BackgroundPosition["bottom"] = 0] = "bottom";
    BackgroundPosition[BackgroundPosition["center"] = 1] = "center";
    BackgroundPosition[BackgroundPosition["left"] = 2] = "left";
    BackgroundPosition[BackgroundPosition["leftBottom"] = 3] = "leftBottom";
    BackgroundPosition[BackgroundPosition["leftTop"] = 4] = "leftTop";
    BackgroundPosition[BackgroundPosition["right"] = 5] = "right";
    BackgroundPosition[BackgroundPosition["rightBottom"] = 6] = "rightBottom";
    BackgroundPosition[BackgroundPosition["rightTop"] = 7] = "rightTop";
    BackgroundPosition[BackgroundPosition["top"] = 8] = "top";
})(BackgroundPosition || (BackgroundPosition = {}));
var BackgroundRepeat;
(function (BackgroundRepeat) {
    BackgroundRepeat[BackgroundRepeat["repeat"] = 0] = "repeat";
    BackgroundRepeat[BackgroundRepeat["noRepeat"] = 1] = "noRepeat";
    BackgroundRepeat[BackgroundRepeat["repeatX"] = 2] = "repeatX";
    BackgroundRepeat[BackgroundRepeat["repeatY"] = 3] = "repeatY";
    BackgroundRepeat[BackgroundRepeat["round"] = 4] = "round";
    BackgroundRepeat[BackgroundRepeat["space"] = 5] = "space";
})(BackgroundRepeat || (BackgroundRepeat = {}));
var BackgroundSize;
(function (BackgroundSize) {
    BackgroundSize[BackgroundSize["auto"] = 0] = "auto";
    BackgroundSize[BackgroundSize["cover"] = 1] = "cover";
    BackgroundSize[BackgroundSize["contain"] = 2] = "contain";
})(BackgroundSize || (BackgroundSize = {}));
var _Background = /** @class */ (function () {
    function _Background(args) {
        this.scrollBehaviour = args.scrollBehaviour;
        this.Clip = args.Clip;
        this.Color = args.Color;
        this.Origin = args.Origin;
        this.Position = args.Position;
        this.Repeat = args.Repeat;
        this.Size = args.Size;
        this.Image = args.Image;
    }
    return _Background;
}());
export { _Background, BackgroundScrollBehaviour, BackgroundClip, BackgroundOrigin, BackgroundPosition, BackgroundRepeat, BackgroundSize, };
//# sourceMappingURL=background.js.map