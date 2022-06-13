import { Widget } from "../widgets/index.js";
import { _BoxDecoration } from "../painting/index.js";
/**
 * Function to process the decorations and bind them to css properties
 * @param widget The widget on witch the decorations will be applied to
 * @param boxDecoration The decoration Properties
 * @returns Widget
 */
declare function defineDecoration(widget: Widget, boxDecoration?: _BoxDecoration): Widget;
export { defineDecoration };
