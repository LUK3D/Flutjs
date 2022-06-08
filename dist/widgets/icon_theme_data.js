var IconThemeData = /** @class */ (function () {
    function IconThemeData(args) {
        this.color = args.color;
        this.opacity = args.opacity;
        this.size = args.size;
    }
    IconThemeData.prototype.copyWith = function (args) {
        return new IconThemeData({
            color: args.color || this.color,
            opacity: args.opacity || this.opacity,
            size: args.size || this.size,
        });
    };
    return IconThemeData;
}());
export { IconThemeData };
//# sourceMappingURL=icon_theme_data.js.map