import { RelativeUnits } from "../rendering/mesurementes.js";
import { Container } from "./container.js";
/** # Spacer
 * creates an adjustable, empty spacer that can be used to tune the
* spacing between widgets in a [Flex] container, like [Row] or [Column].
*
* The [Spacer] widget will take up any available space, so setting the
* [Flex.mainAxisAlignment] on a flex container that contains a [Spacer] to
* [MainAxisAlignment.spaceAround], [MainAxisAlignment.spaceBetween], or
* [MainAxisAlignment.spaceEvenly] will not have any visible effect: the
* [Spacer] has taken up all of the additional space, therefore there is none
* left to redistribute.
*
*
* ```js
* Row(
*   {
*    children: const <Widget>[
*        Text('Begin'),
*        Spacer(), // Defaults to a flex of one.
*        Text('Middle'),
*        // Gives twice the space between Middle and End than Begin and Middle.
*        Text('End'),
*    ],
*   }
* )
* ```

*/
function Spacer(args) {
    var widget = Container({
        width: 100,
        height: 100,
        widthSizeMeasurementUnit: RelativeUnits["%"],
        heightSizeMeasurementUnit: RelativeUnits["%"],
        child: args === null || args === void 0 ? void 0 : args.child
    });
    console.log("Spacer PAI: ", widget.parent);
    return widget;
}
export { Spacer };
//# sourceMappingURL=spacer.js.map