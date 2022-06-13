var CssProperty = /** @class */ (function () {
    function CssProperty(name, value) {
        this.name = name;
        this.value = value;
    }
    return CssProperty;
}());
var CssProperties = /** @class */ (function () {
    function CssProperties(args) {
        this._props = args;
    }
    /**
     * Defines the css propertie to the tag of widget.
     * @param widget The widget that will be modified
     */
    CssProperties.prototype.apply = function (widget) {
        var context = this;
        for (var key in context._props) {
            //Defining the type of the key
            var keyTyped = key;
            //Getting the value of the key
            widget.tag.style[key] = context._props[keyTyped];
            console.log("FROM CSS", key, ":", widget.tag.style[key]);
        }
        return widget;
        // widget.tag!.style
    };
    return CssProperties;
}());
export { CssProperty, CssProperties };
//# sourceMappingURL=cssprops.js.map