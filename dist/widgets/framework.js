import { RelativeUnits } from "../rendering/mesurementes.js";
import { ExtractCss } from "../utils/processor.js";
import { Key } from "../utils/uuid.js";
import { isNumber } from "../utils/validator.js";
/**
 * Flutjs class to generate a new Widget
 */
var Widget = /** @class */ (function () {
    function Widget(args) {
        var _a, _b;
        this.width = "auto";
        this.height = "auto";
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width and Height
         */
        this.width_size_measurement_unit = RelativeUnits["%"];
        this.height_size_measurement_unit = RelativeUnits["%"];
        this.key = args.key;
        this.child = args.child;
        this.children = args.children;
        this.parent = args.parent;
        this.render({ tagName: args.tagName, text: args.text, classes: args.classes });
        this.width = args.width || this.width;
        this.height = args.height || this.height;
        this.width_size_measurement_unit = (_a = args.width_size_measurement_unit) !== null && _a !== void 0 ? _a : this.width_size_measurement_unit;
        this.height_size_measurement_unit = (_b = args.height_size_measurement_unit) !== null && _b !== void 0 ? _b : this.height_size_measurement_unit;
        this.key = Key();
        this.setKey(args.key);
        this.classes = args.classes;
        if (isNumber(args.width)) {
            this.tag.style.width = args.width.toString() + this.width_size_measurement_unit;
        }
        if (isNumber(args.height)) {
            this.tag.style.height = args.height.toString() + this.height_size_measurement_unit;
        }
        return this;
    }
    Widget.prototype.setKey = function (key) {
        var _a, _b;
        if (key) {
            (_a = this.tag) === null || _a === void 0 ? void 0 : _a.setAttribute("key", key.toString());
        }
        else {
            (_b = this.tag) === null || _b === void 0 ? void 0 : _b.setAttribute("key", "".concat(this.tag.tagName.toLowerCase(), "_").concat(this.key.toString()));
        }
    };
    Widget.prototype.render = function (args) {
        var _a;
        var _this = this;
        this.tag = document.createElement(args.tagName);
        document.body.appendChild(this.tag);
        if (args.classes) {
            (_a = this.tag.classList).add.apply(_a, args.classes);
            // ctx.classes!.forEach(element => {
            // });
        }
        this.addTextContent({ text: args.text });
        if (this.child) {
            this.appendChild(this.child.tag);
            this.extactStyle(this.child);
        }
        if (this.children) {
            var ctx_1 = this;
            this.children.map(function (widget) {
                widget.parent = ctx_1.tag;
                _this.extactStyle(widget);
                _this.appendChild(widget.tag);
            });
        }
    };
    //So.., because we want to generate beautiful websites, we need to extract the inline  css for each element.
    //TODO: Finish removing the inline css
    // For now its just extracting the last element css..
    Widget.prototype.extactStyle = function (widget) {
        if (!this.style) {
            this.style = this.tag.getAttribute("style") || "";
        }
        console.log("WIDGET STYLE: ", widget.style + this.style);
        this.style = ExtractCss(widget);
        //Removendo o atributo style para deixar o código mais limpo.
        // widget.tag!.removeAttribute("style");
        console.log("STYLE2: ", this.style);
    };
    Widget.prototype.addTextContent = function (args) {
        if (args.text) {
            if (args.text.length > 0) {
                this.tag.textContent = args.text;
            }
        }
    };
    Widget.prototype.appendChild = function (el) {
        var _a;
        (_a = this.tag) === null || _a === void 0 ? void 0 : _a.appendChild(el);
    };
    return Widget;
}());
export default Widget;
export { Widget };
//# sourceMappingURL=framework.js.map