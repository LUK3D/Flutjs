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
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import { Converter } from "../utils/converter.js";
import Widget from "./framework.js";
var _Column = /** @class */ (function (_super) {
    __extends(_Column, _super);
    function _Column(args) {
        var _a, _b;
        return _super.call(this, {
            tagName: "div",
            children: args.children,
            classes: ['flex', 'flex-col', (_a = args.mainAxisAlignment) !== null && _a !== void 0 ? _a : new Converter().invertFlex(MainAxisAlignment.start), (_b = args.crossAxisAlignment) !== null && _b !== void 0 ? _b : new Converter().invertFlex(CrossAxisAlignment.start)
            ]
        }) || this;
    }
    return _Column;
}(Widget));
/**
 * ## Column Widget
 * Creates a Vertical List Container
 * @param args Columns Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Column({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
function Column(args) {
    return new _Column(args);
}
export { Column };
//# sourceMappingURL=column.js.map