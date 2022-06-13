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
import { RelativeUnits } from "../rendering/mesurementes.js";
import { CssProperties } from "../utils/cssprops.js";
import Widget from "./framework.js";
var _Stack = /** @class */ (function (_super) {
    __extends(_Stack, _super);
    function _Stack(args) {
        return _super.call(this, {
            tagName: "div",
            children: args.children,
            width: 100,
            height: 100,
            width_size_measurement_unit: RelativeUnits["%"],
            height_size_measurement_unit: RelativeUnits["%"],
            css: new CssProperties({
                flexDirection: "Stack",
                position: "relative"
            }),
        }) || this;
    }
    return _Stack;
}(Widget));
/**
 * ## Stack Widget
 * Creates a Vertical List Container
 * @param args Stacks Arguments
 * @returns Widget
 *
 * Ex:
 * ```js
 * Stack({
 *    children:[
 *       //List of widgets here
 *    ]
 * })
 *
 * ```
 */
function Stack(args) {
    return new _Stack(args);
}
export { Stack };
//# sourceMappingURL=stack.js.map