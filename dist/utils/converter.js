import { Mesurements } from "./constants.js";
import { ConversioException } from "./FlutExeption.js";
import { isNumber } from "./validator.js";
var Converter = /** @class */ (function () {
    function Converter() {
    }
    Converter.prototype.toNumber = function (val) {
        var _this = this;
        if (!val) {
            return 0;
        }
        this.val = val;
        if (!isNumber(this.val)) {
            var v = this.val;
            Mesurements.forEach(function (element) {
                if (isNumber(v)) {
                    _this.val = _this.val.toString().split(element).join("");
                }
                else {
                    ConversioException({ message: "Invalid Number: " + v.toString() });
                }
            });
        }
        return Number.parseFloat(this.val.toString());
    };
    return Converter;
}());
export { Converter };
//# sourceMappingURL=converter.js.map