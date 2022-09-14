import { uuid } from "./utils/generator/uuid.js";
/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
var Widget = /** @class */ (function () {
    function Widget(args) {
        var _a;
        this.styles = [];
        this.args = args;
        this.className = args.className;
        this.style = args.style;
        if (args.isBase) {
            this.source = this.render().dom;
            var finalStyle = this.makeStyles();
            console.log(finalStyle, (_a = this.args.nativeEl) === null || _a === void 0 ? void 0 : _a.type);
            this.source.innerHTML += "<style>".concat(finalStyle, "</style>");
        }
    }
    Widget.prototype.make = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.args.domElement = document.createElement((_b = (_a = this.args.nativeEl) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'div');
        this.args.domElement.setAttribute('fjs-key', (_c = this.args.key) !== null && _c !== void 0 ? _c : uuid(5));
        (_e = (_d = this.args.nativeEl) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.map(function (attr) {
            var _a;
            (_a = _this.args.domElement) === null || _a === void 0 ? void 0 : _a.setAttribute(attr.type, attr.value);
        });
    };
    Widget.prototype.render = function () {
        var _this = this;
        var _a, _b;
        this.make();
        if (this.args.children.length > 0) {
            this.args.children.forEach(function (child) {
                var _a;
                var rendered = child.render();
                _this.args.domElement.appendChild(rendered.dom);
                (_a = _this.styles).push.apply(_a, rendered.styles);
                console.log('---', _this.styles);
            });
        }
        if (this.style) {
            (_a = this.args.domElement) === null || _a === void 0 ? void 0 : _a.classList.add((_b = this.style) === null || _b === void 0 ? void 0 : _b.selector);
            this.styles.push(this.style);
        }
        var res = {
            dom: this.args.domElement,
            styles: this.styles
        };
        return res;
    };
    Widget.prototype.makeStyles = function () {
        var res = this.styles.map(function (style) {
            return "\n            .".concat(style.selector, "{\n                ").concat(style.styles.join(';\n'), ";\n            }\n            ");
        }).join('\n');
        console.log("FINAL!", res);
        return res;
    };
    Widget.prototype.getSource = function () {
        return this.source;
    };
    return Widget;
}());
export { Widget };
//# sourceMappingURL=flutjs.js.map