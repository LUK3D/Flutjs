/**
 * Function to process the decorations and bind them to css properties
 * @param widget The widget on witch the decorations will be applied to
 * @param boxDecoration The decoration Properties
 * @returns Widget
 */
function defineDecoration(widget, boxDecoration) {
    if (!boxDecoration) {
        return widget;
    }
    if (boxDecoration === null || boxDecoration === void 0 ? void 0 : boxDecoration.borderRadius) {
        if (boxDecoration === null || boxDecoration === void 0 ? void 0 : boxDecoration.borderRadius.value) {
            var radius = boxDecoration === null || boxDecoration === void 0 ? void 0 : boxDecoration.borderRadius.value;
            widget.css._props.borderTopLeftRadius = radius[0];
            widget.css._props.borderTopRightRadius = radius[1];
            widget.css._props.borderBottomLeftRadius = radius[2];
            widget.css._props.borderBottomRightRadius = radius[3];
            // widget.tag!.style.borderTopLeftRadius = radius[0] ;
            // widget.tag!.style.borderTopRightRadius = radius[1] ;
            // widget.tag!.style.borderBottomLeftRadius = radius[2] ;
            // widget.tag!.style.borderBottomRightRadius = radius[3] ;
        }
    }
    if (boxDecoration.boxShadow) {
        widget.css._props.boxShadow = boxDecoration.boxShadow.map(function (x) {
            return x.value();
        }).join(", ");
    }
    return widget;
}
export { defineDecoration };
//# sourceMappingURL=styles.js.map