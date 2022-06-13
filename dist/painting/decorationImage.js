/// How to paint any portions of a box not covered by an image.
var ImageRepeat;
(function (ImageRepeat) {
    /// Repeat the image in both the x and y directions until the box is filled.
    ImageRepeat["repeat"] = "repeat";
    /// Repeat the image in the x direction until the box is filled horizontally.
    ImageRepeat["repeatX"] = "repeat-x";
    /// Repeat the image in the y direction until the box is filled vertically.
    ImageRepeat["repeatY"] = "repeat-y";
    /// Leave uncovered portions of the box transparent.
    ImageRepeat["noRepeat"] = "no-repeat";
    ImageRepeat["space"] = "space";
    ImageRepeat["round"] = "round";
    ImageRepeat["initial"] = "initial";
    ImageRepeat["inherit"] = "inherit";
})(ImageRepeat || (ImageRepeat = {}));
export { ImageRepeat };
//# sourceMappingURL=decorationImage.js.map