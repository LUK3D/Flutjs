import { Widget } from "./index.js";
import { AbsoluteUnits } from "../rendering/mesurementes.js";
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
declare function Positioned(args: {
    child: Widget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number | string;
    height?: number | string;
    width_size_measurement_unit?: AbsoluteUnits.pixels;
    height_size_measurement_unit?: AbsoluteUnits.pixels;
}): Widget;
export { Positioned };
