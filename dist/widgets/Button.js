var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Alignment } from "../painting/alignment.js";
import { Colors } from "../painting/colors.js";
import { EdgeInsets } from "../painting/edge_insets.js";
import { CssProperties } from "../utils/cssprops.js";
import { Widget } from "./framework.js";
import { Row } from "./row.js";
var _Button = /** @class */ (function (_super) {
    __extends(_Button, _super);
    function _Button(args) {
        var _this = _super.call(this, { key: args.key, tagName: "button", child: Row({ children: [args.icon, args.label] }), boxDecoration: args.boxDecoration, padding: args.padding }) || this;
        _this.padding = EdgeInsets.all(8.0);
        _this.alignment = new Alignment({}).center();
        _this.alignment = args.alignment;
        _this.iconSize = args.iconSize;
        _this.splashRadius = args.splashRadius;
        _this.color = args.color;
        _this.focusColor = args.focusColor;
        _this.hoverColor = args.hoverColor;
        _this.highlightColor = args.highlightColor;
        _this.splashColor = args.splashColor;
        _this.disabledColor = args.disabledColor;
        _this.onPressed = args.onPressed;
        _this.autofocus = args.autofocus;
        _this.tooltip = args.tooltip;
        _this.icon = args.icon;
        _this.label = args.label;
        _this.tag.addEventListener('click', function (event) {
            _this.onPressed(event);
        });
        return _this;
    }
    return _Button;
}(Widget));
function Button(args) {
    var button = new _Button(args);
    button.css = new CssProperties({
        padding: "15px 32px",
        color: Colors.Gray[50].value,
        textAlign: "center",
        background: Colors.Sky[500].value,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    });
    button.css.apply(button);
    return button;
}
export { Button };
//# sourceMappingURL=Button.js.map