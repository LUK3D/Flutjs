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
    MainAxisAlignment["start"] = "flex-start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    MainAxisAlignment["end"] = "flex-end";
    /** Place the children as close to the middle of the main axis as possible.*/
    MainAxisAlignment["center"] = "center";
    /** Place the free space evenly between the children.*/
    MainAxisAlignment["spaceBetween"] = "space-between";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    MainAxisAlignment["spaceAround"] = "space-around";
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    MainAxisAlignment["spaceEvenly"] = "space-evenly";
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
    CrossAxisAlignment["start"] = "start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    CrossAxisAlignment["end"] = "end";
    /** Place the children as close to the middle of the main axis as possible.*/
    CrossAxisAlignment["center"] = "center";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    CrossAxisAlignment["spaceAround"] = "stretch";
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    CrossAxisAlignment["spaceEvenly"] = "items-stretch";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));
var Flex = /** @class */ (function () {
    function Flex(args) {
        args.el.style.display = "flex";
    }
    return Flex;
}());
export { MainAxisAlignment, CrossAxisAlignment };
//# sourceMappingURL=flex.js.map