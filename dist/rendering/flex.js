/** How the children should be placed along the main axis in a flex layout.
*
* See also:
*
*  * [Column], [Row], and [Flex], the flex widgets.
*  * [RenderFlex], the flex render object.
*/
var MainAxisAlignment;
(function (MainAxisAlignment) {
    /** Place the children as close to the start of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the start is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the start is the top or the bottom.
    * */
    MainAxisAlignment[MainAxisAlignment["start"] = 0] = "start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    MainAxisAlignment[MainAxisAlignment["end"] = 1] = "end";
    /** Place the children as close to the middle of the main axis as possible.*/
    MainAxisAlignment[MainAxisAlignment["center"] = 2] = "center";
    /** Place the free space evenly between the children.*/
    MainAxisAlignment[MainAxisAlignment["spaceBetween"] = 3] = "spaceBetween";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    MainAxisAlignment[MainAxisAlignment["spaceAround"] = 4] = "spaceAround";
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    MainAxisAlignment[MainAxisAlignment["spaceEvenly"] = 5] = "spaceEvenly";
})(MainAxisAlignment || (MainAxisAlignment = {}));
var CrossAxisAlignment;
(function (CrossAxisAlignment) {
    /** Place the children as close to the start of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the start is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the start is the top or the bottom.
    * */
    CrossAxisAlignment[CrossAxisAlignment["start"] = 0] = "start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    CrossAxisAlignment[CrossAxisAlignment["end"] = 1] = "end";
    /** Place the children as close to the middle of the main axis as possible.*/
    CrossAxisAlignment[CrossAxisAlignment["center"] = 2] = "center";
    /** Place the free space evenly between the children.*/
    CrossAxisAlignment[CrossAxisAlignment["spaceBetween"] = 3] = "spaceBetween";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    CrossAxisAlignment[CrossAxisAlignment["spaceAround"] = 4] = "spaceAround";
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    CrossAxisAlignment[CrossAxisAlignment["spaceEvenly"] = 5] = "spaceEvenly";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));
var Flex = /** @class */ (function () {
    function Flex(args) {
        args.el.style.display = "flex";
    }
    return Flex;
}());
export { MainAxisAlignment, CrossAxisAlignment };
