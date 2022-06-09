/**
Base class for [EdgeInsets] that allows for text-direction aware
resolution.

A property or argument of this type accepts classes created either with [
EdgeInsets.fromLTRB] and its variants, or [
EdgeInsetsDirectional.fromSTEB] and its variants.

To convert an [EdgeInsetsGeometry] object of indeterminate type into a
[EdgeInsets] object, call the [resolve] method.

See also:

 * [Padding], a widget that describes margins using [EdgeInsetsGeometry].

**/
import { Axis } from "../rendering/axis.js";
declare class EdgeInsetsGeometry {
    bottom?: number | string;
    end?: number | string;
    left?: number | string;
    right?: number | string;
    start?: number | string;
    top?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    /**
     *  ## Value
     * the string value of EdgeInsets
     */
    value?: string;
    constructor(args: {
        bottom?: number | string;
        end?: number | string;
        left?: number | string;
        right?: number | string;
        start?: number | string;
        top?: number | string;
    });
    /**
     * ## EdgeInsets Value
     * @param propertie The css propertie to be modified (margin, padding), needs to have `-` signe
     * @returns css string propertie-left:value
     */
    val(propertie: string): this;
    arrayed_value(propertie: string): string[];
    reset(): void;
    along(args: {
        axis: Axis;
    }): this;
    infinity(): EdgeInsetsGeometry;
}
declare class _EdgeInsets extends EdgeInsetsGeometry {
    constructor(args: {
        bottom?: number | string;
        end?: number | string;
        left?: number | string;
        right?: number | string;
        start?: number | string;
        top?: number | string;
        propertie: string;
    });
    /** Creates insets with only the given values non-zero.
    *
    * {@tool snippet}
    *
    * Left margin indent of 40 pixels:
    *
    * ```js
    * const EdgeInsets.only({left: 40.0})
    * ```
    * {@end-tool}
    *
    * */
    only(args: {
        left?: string | number;
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
    }): EdgeInsetsGeometry;
    all(val: string | number): EdgeInsetsGeometry;
    /** Creates insets with symmetrical vertical and horizontal offsets.
    *
    * Eight pixel margin above and below, no horizontal margins:
    *
    * ```js
    * const EdgeInsets.symmetric({vertical: 8.0})
    * ```
    * */
    symmetric(args: {
        vertical?: number | string;
        horizontal?: number | string;
    }): EdgeInsetsGeometry;
}
/**
 * ## EdgeInsets
* An immutable set of offsets in each of the four cardinal directions.
*
* Typically used for an offset from each of the four sides of a box. For
* example, the padding inside a box can be represented using this class.
*
* The [EdgeInsets] class specifies offsets in terms of visual edges, left,
* top, right, and bottom. These values are not affected by the
* [TextDirection]. To support both left-to-right and right-to-left layouts,
* consider using [EdgeInsetsDirectional], which is expressed in terms of
* _start_, top, _end_, and bottom, where start and end are resolved in terms
* of a [TextDirection] (typically obtained from the ambient [Directionality]).
*
*
* Here are some examples of how to create [EdgeInsets] instances:
*
* Typical eight-pixel margin on all sides:
*
* ```js
* const EdgeInsets.all(8.0)
* ```
*
* Eight pixel margin above and below, no horizontal margins:
*
* ```js
* const EdgeInsets.symmetric({vertical: 8.0})
* ```
*
* Left margin indent of 40 pixels:
*
* ```js
* const EdgeInsets.only({left: 40.0})
* ```
*
* See also:
*
*  * [Padding], a widget that accepts [EdgeInsets] to describe its margins.
*  * [EdgeInsetsDirectional], which (for properties and arguments that accept
*    the type [EdgeInsetsGeometry]) allows the horizontal insets to be
*    specified in a [TextDirection]-aware manner.
*/
declare var EdgeInsets: _EdgeInsets;
export { EdgeInsetsGeometry, EdgeInsets };
