var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.width = "auto";
        this.height = "auto";
        /**
         * ### Size Measurement unit
         * Defines the Units measurement of Width and Height
         */
        this.width_size_measurement_unit = RelativeUnits["%"];
        this.height_size_measurement_unit = RelativeUnits["%"];
        this.css = new CssProperties(__assign({}, (_a = args.css) === null || _a === void 0 ? void 0 : _a._props));
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
            (_b = args.width_size_measurement_unit) !== null && _b !== void 0 ? _b : this.width_size_measurement_unit;
        this.height_size_measurement_unit =
            (_c = args.height_size_measurement_unit) !== null && _c !== void 0 ? _c : this.height_size_measurement_unit;
        this.boxDecoration = (_d = args.boxDecoration) !== null && _d !== void 0 ? _d : this.boxDecoration;
        // this.css = args.css;
        this.key = Key();
        this.setKey(args.key);
        this.classes = args.classes;
        var paddings = (_e = args.padding) === null || _e === void 0 ? void 0 : _e.arrayed_value("padding");
        if (paddings) {
            this.css._props.paddingLeft = paddings[0];
            this.css._props.paddingTop = paddings[1];
            this.css._props.paddingRight = paddings[2];
            this.css._props.paddingBottom = paddings[3];
        }
        var margins = (_f = args.margin) === null || _f === void 0 ? void 0 : _f.arrayed_value("margin");
        if (margins) {
            this.css._props.marginLeft = margins[0];
            this.css._props.marginTop = margins[1];
            this.css._props.marginRight = margins[2];
            this.css._props.marginBottom = margins[3];
        }
        if ((_g = args.boxDecoration) === null || _g === void 0 ? void 0 : _g.color)
            this.css._props.backgroundColor = (_j = (_h = args.boxDecoration) === null || _h === void 0 ? void 0 : _h.color) !== null && _j !== void 0 ? _j : "";
        if (isNumber(args.width))
            this.css._props.width =
                args.width.toString() + this.width_size_measurement_unit;
        if (isNumber(args.height))
            this.css._props.height =
                args.height.toString() + this.height_size_measurement_unit;
        defineDecoration(this, args.boxDecoration);
        (_k = this.css) === null || _k === void 0 ? void 0 : _k.apply(this);
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