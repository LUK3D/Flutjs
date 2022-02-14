"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconThemeData = void 0;
class IconThemeData {
    constructor(args) {
        this.color = args.color;
        this.opacity = args.opacity;
        this.size = args.size;
    }
    copyWith(args) {
        return new IconThemeData({
            color: args.color || this.color,
            opacity: args.opacity || this.opacity,
            size: args.size || this.size,
        });
    }
}
exports.IconThemeData = IconThemeData;
