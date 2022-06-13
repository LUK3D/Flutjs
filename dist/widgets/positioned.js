import { Widget } from "./index.js";
import { CssProperties } from "../utils/cssprops.js";
/** # Positioned
 * creates an adjustable, empty Positioned that can be used to tune the
* spacing between widgets in a [Flex] container, like [Row] or [Column].
*
* The [Positioned] widget will take up any available space, so setting the
* [Flex.mainAxisAlignment] on a flex container that contains a [Positioned] to
* [MainAxisAlignment.spaceAround], [MainAxisAlignment.spaceBetween], or
* [MainAxisAlignment.spaceEvenly] will not have any visible effect: the
* [Positioned] has taken up all of the additional space, therefore there is none
* left to redistribute.
*
*
* ```js
* Row(
*   {
*    children: const <Widget>[
*        Text('Begin'),
*        Positioned(), // Defaults to a flex of one.
*        Text('Middle'),
*        // Gives twice the space between Middle and End than Begin and Middle.
*        Text('End'),
*    ],
*   }
* )
* ```

*/
function Positioned(args) {
    var _a, _b, _c, _d;
    var widget = new Widget({
        tagName: "div",
        width: args.width,
        height: args.height,
        width_size_measurement_unit: args === null || args === void 0 ? void 0 : args.width_size_measurement_unit,
        height_size_measurement_unit: args === null || args === void 0 ? void 0 : args.height_size_measurement_unit,
        child: args.child,
        css: new CssProperties({
            position: "absolute",
            top: (((_a = args.top) === null || _a === void 0 ? void 0 : _a.toString()) + "px"),
            left: (((_b = args.left) === null || _b === void 0 ? void 0 : _b.toString()) + "px"),
            right: (((_c = args.right) === null || _c === void 0 ? void 0 : _c.toString()) + "px"),
            bottom: (((_d = args.bottom) === null || _d === void 0 ? void 0 : _d.toString()) + "px"),
        })
    });
    return widget;
}
export { Positioned };
//# sourceMappingURL=positioned.js.map