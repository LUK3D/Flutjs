var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Widget from "./framework.js";
var _Column = /** @class */ (function (_super) {
    __extends(_Column, _super);
    function _Column(args) {
        return _super.call(this, {
            tagName: "div",
            children: args.children,
        }) || this;
    }
    return _Column;
}(Widget));
function Column(args) {
    return new _Column(args);
}
export { Column };
//# sourceMappingURL=column.js.map