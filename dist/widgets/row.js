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
import Widget from "./framework.js";
var _Row = /** @class */ (function (_super) {
    __extends(_Row, _super);
    function _Row(args) {
        var _a, _b;
        return _super.call(this, {
            tagName: "div",
            children: args.children,
            classes: ['flex', 'flex-row', 'w-full', 'h-full', (_a = args.mainAxisAlignment) !== null && _a !== void 0 ? _a : MainAxisAlignment.start, (_b = args.crossAxisAlignment) !== null && _b !== void 0 ? _b : CrossAxisAlignment.start
            ]
        }) || this;
    }
    return _Row;
}(Widget));
/**
 * ## Row Widget
 * Creates a Horizontal List Container
 * @param args Rows Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Row({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
function Row(args) {
    return new _Row(args);
}
export { Row };
//# sourceMappingURL=row.js.map