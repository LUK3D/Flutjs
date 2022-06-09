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
    MainAxisAlignment["start"] = "justify-start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    MainAxisAlignment["end"] = "justify-end";
    /** Place the children as close to the middle of the main axis as possible.*/
    MainAxisAlignment["center"] = "justify-center";
    /** Place the free space evenly between the children.*/
    MainAxisAlignment["spaceBetween"] = "justify-between";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    MainAxisAlignment["spaceAround"] = "justify-around";
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    MainAxisAlignment["spaceEvenly"] = "justify-evenly";
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
    CrossAxisAlignment["start"] = "items-start";
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    CrossAxisAlignment["end"] = "items-end";
    /** Place the children as close to the middle of the main axis as possible.*/
    CrossAxisAlignment["center"] = "items-center";
    /** Place the free space evenly between the children.*/
    CrossAxisAlignment["spaceBetween"] = "items-";
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    CrossAxisAlignment["spaceAround"] = "base-line";
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