import { _BoxDecoration } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import { Widget } from "./framework.js";
import { AbsoluteUnits, RelativeUnits } from "../index.js";
import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { Clip } from "../ui/painting.js";
declare class _Container extends Widget {
    constructor(args: {
        key?: _Key | string;
        child?: Widget;
        width?: number | string;
        height?: number | string;
        color?: Color;
        boxDecoration?: _BoxDecoration;
        margin?: EdgeInsetsGeometry;
        padding?: EdgeInsetsGeometry;
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width
         *
         * {@link AbsoluteUnits} or {@link AbsoluteUnits}
         */
        width_size_measurement_unit?: AbsoluteUnits | RelativeUnits;
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Height
         *
         * {@link AbsoluteUnits} or {@link AbsoluteUnits}
         */
        height_size_measurement_unit?: AbsoluteUnits | RelativeUnits;
        clipBehavior?: Clip;
    });
}
declare function Container(args: {
    key?: _Key | string;
    child?: Widget;
    width?: number | string;
    height?: number | string;
    color?: Color;
    decoration?: _BoxDecoration;
    /**
     * ### Size Measurement unit
     * Defines the Units measurement of Width
     *
     * {@link AbsoluteUnits} or {@link AbsoluteUnits}
     */
    widthSizeMeasurementUnit?: AbsoluteUnits | RelativeUnits;
    /**
     * ### Size Measurement unit
     * Defines the Units measurement of Height
     *
     * {@link AbsoluteUnits} or {@link AbsoluteUnits}
     */
    heightSizeMeasurementUnit?: AbsoluteUnits | RelativeUnits;
    /**Empty space to surround the [decoration] and [child]. */
    margin?: EdgeInsetsGeometry;
    /**
     * Empty space to inscribe inside the [decoration]. The [child], if any, is
     *  placed inside this padding.
     *
     *  This padding is in addition to any padding inherent in the [decoration];
     *  see [Decoration.padding].
     */
    padding?: EdgeInsetsGeometry;
    clipBehavior?: Clip;
}): _Container;
export { Container, _Container };
