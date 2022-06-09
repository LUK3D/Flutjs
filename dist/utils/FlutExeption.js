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
var FlutException = /** @class */ (function () {
    function FlutException(args) {
        this.message = args.message;
        this.type = args.type;
    }
    FlutException.prototype.thtrow = function () {
        throw this;
    };
    return FlutException;
}());
function WidgetExeption(args) {
    new FlutException(__assign({ type: "WidgetError" }, args)).thtrow();
}
function ConversioException(args) {
    new FlutException({ type: "Conversion Exception", message: args.message });
}
export { WidgetExeption, ConversioException };
//# sourceMappingURL=FlutExeption.js.map