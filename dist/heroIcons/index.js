import { Colors } from "../painting/colors.js";
import { AbsoluteUnits } from "../rendering/mesurementes.js";
import { Widget } from "../widgets/index.js";
function academicCap(args) {
    var _a;
    if (!args.size) {
        args.size = 32;
    }
    var icon = new Widget({
        tagName: "div",
        width: args.size,
        height: args.size,
        width_size_measurement_unit: AbsoluteUnits.pixels,
        height_size_measurement_unit: AbsoluteUnits.pixels
    });
    icon.tag.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M12 14l9-5-9-5-9 5 9 5z\" />\n        <path d=\"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z\" />\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222\" />\n      </svg>";
    icon.css._props.color = ((_a = args.color) !== null && _a !== void 0 ? _a : Colors.White).value;
    icon.css.apply(icon);
    return icon;
}
function adjustments(args) {
    var _a;
    if (!args.size) {
        args.size = 32;
    }
    var icon = new Widget({
        tagName: "div",
        width: args.size,
        height: args.size,
        width_size_measurement_unit: AbsoluteUnits.pixels,
        height_size_measurement_unit: AbsoluteUnits.pixels
    });
    icon.tag.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4\" />\n      </svg>";
    icon.css._props.color = ((_a = args.color) !== null && _a !== void 0 ? _a : Colors.White).value;
    icon.css.apply(icon);
    return icon;
}
export { academicCap, adjustments };
//# sourceMappingURL=index.js.map