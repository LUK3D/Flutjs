/** How the children should be placed along the main axis in a flex layout.
*
* See also:
*
*  * [Column], [Row], and [Flex], the flex widgets.
*  * [RenderFlex], the flex render object.
*/
declare enum MainAxisAlignment {
    /** Place the children as close to the start of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the start is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the start is the top or the bottom.
    * */
    start = "flex-start",
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    end = "flex-end",
    /** Place the children as close to the middle of the main axis as possible.*/
    center = "center",
    /** Place the free space evenly between the children.*/
    spaceBetween = "space-between",
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    spaceAround = "space-around",
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    spaceEvenly = "space-evenly"
}
declare enum CrossAxisAlignment {
    /** Place the children as close to the start of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the start is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the start is the top or the bottom.
    * */
    start = "start",
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    end = "end",
    /** Place the children as close to the middle of the main axis as possible.*/
    center = "center",
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    spaceAround = "stretch",
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    spaceEvenly = "items-stretch"
}
export { MainAxisAlignment, CrossAxisAlignment };
