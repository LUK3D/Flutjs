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
    start = 0,
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    end = 1,
    /** Place the children as close to the middle of the main axis as possible.*/
    center = 2,
    /** Place the free space evenly between the children.*/
    spaceBetween = 3,
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    spaceAround = 4,
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    spaceEvenly = 5
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
    start = 0,
    /** Place the children as close to the end of the main axis as possible.
    *
    * If this value is used in a horizontal direction, a [TextDirection] must be
    * available to determine if the end is the left or the right.
    *
    * If this value is used in a vertical direction, a [VerticalDirection] must be
    * available to determine if the end is the top or the bottom.
    * */
    end = 1,
    /** Place the children as close to the middle of the main axis as possible.*/
    center = 2,
    /** Place the free space evenly between the children.*/
    spaceBetween = 3,
    /** Place the free space evenly between the children as well as half of that
    * space before and after the first and last child.
    * */
    spaceAround = 4,
    /** Place the free space evenly between the children as well as before and
    * after the first and last child.
    * */
    spaceEvenly = 5
}
export { MainAxisAlignment, CrossAxisAlignment };
