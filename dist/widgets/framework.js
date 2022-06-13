import { RelativeUnits } from "../rendering/mesurementes.js";
import { CssProperties } from "../utils/cssprops.js";
import { ExtractCss } from "../utils/processor.js";
import { defineDecoration } from "../utils/styles.js";
import { Key } from "../utils/uuid.js";
import { isNumber } from "../utils/validator.js";
/**
 * Flutjs class to generate a new Widget
 */
var Widget = /** @class */ (function () {
    function Widget(args) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.width = "auto";
        this.height = "auto";
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width and Height
         */
        this.width_size_measurement_unit = RelativeUnits["%"];
        this.height_size_measurement_unit = RelativeUnits["%"];
        this.css = new CssProperties({});
        this.key = args.key;
        this.child = args.child;
        this.children = args.children;
        this.parent = args.parent;
        this.render({
            tagName: args.tagName,
            text: args.text,
            classes: args.classes,
        });
        this.width = args.width || this.width;
        this.height = args.height || this.height;
        this.width_size_measurement_unit =
            (_a = args.width_size_measurement_unit) !== null && _a !== void 0 ? _a : this.width_size_measurement_unit;
        this.height_size_measurement_unit =
            (_b = args.height_size_measurement_unit) !== null && _b !== void 0 ? _b : this.height_size_measurement_unit;
        this.boxDecoration = (_c = args.boxDecoration) !== null && _c !== void 0 ? _c : this.boxDecoration;
        // this.css = args.css;
        this.key = Key();
        this.setKey(args.key);
        this.classes = args.classes;
        if ((_d = args.boxDecoration) === null || _d === void 0 ? void 0 : _d.color)
            this.css._props.backgroundColor = (_f = (_e = args.boxDecoration) === null || _e === void 0 ? void 0 : _e.color) !== null && _f !== void 0 ? _f : "";
        if (isNumber(args.width))
            this.css._props.width =
                args.width.toString() + this.width_size_measurement_unit;
        if (isNumber(args.height))
            this.css._props.height =
                args.height.toString() + this.height_size_measurement_unit;
        defineDecoration(this, args.boxDecoration);
        (_g = this.css) === null || _g === void 0 ? void 0 : _g.apply(this);
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