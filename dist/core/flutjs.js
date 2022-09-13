import { uuid } from "./utils/generator/uuid.js";
/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
var Widget = /** @class */ (function () {
    function Widget(args) {
        this.args = args;
    }
    Widget.prototype.make = function () {
        var _a, _b, _c;
        this.args.domElement = document.createElement((_b = (_a = this.args.nativeEl) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'div');
        this.args.domElement.setAttribute('fjs-key', (_c = this.args.key) !== null && _c !== void 0 ? _c : uuid(5));
    };
    Widget.prototype.render = function () {
        var _this = this;
        this.make();
        if (this.args.children.length > 0) {
            this.args.children.forEach(function (child) {
                _this.args.domElement.appendChild(child.render());
            });
        }
        return this.args.domElement;
    };
    return Widget;
}());
export { Widget };
//# sourceMappingURL=flutjs.js.map