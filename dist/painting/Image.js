var _Image = /** @class */ (function () {
    function _Image(args) {
    }
    _Image.prototype.fromGradient = function () {
    };
    return _Image;
}());
function Image(args) {
    return new _Image({ url: args.url });
}
export { Image, _Image };
