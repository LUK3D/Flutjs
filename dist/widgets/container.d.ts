import { _BoxDecation } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import { Widget } from "./framework.js";
import { AbsoluteUnits, RelativeUnits } from "../index.js";
declare class _Container extends Widget {
    constructor(args: {
        key?: _Key | string;
        child?: Widget;
        width?: number | string;
        height?: number | string;
        color?: Color;
        decoratio?: _BoxDecation;
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
    });
}
declare function Container(args: {
    key?: _Key | string;
    child?: Widget;
    width?: number | string;
    height?: number | string;
    color?: Color;
    decoratio?: _BoxDecation;
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
}): _Container;
export { Container, _Container };
