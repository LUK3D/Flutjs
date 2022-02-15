"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
class _Validator {
    isNumber(val) {
        if (!val) {
            return false;
        }
        var reg = /^-?\d+\.?\d*$/;
        return reg.test(val === null || val === void 0 ? void 0 : val.toString());
    }
}
/**
 * ## Check if the value is a Digit
 * @param val The value to be checked
 * @returns `boolean`
 */
function isNumber(val) {
    return new _Validator().isNumber(val);
}
exports.isNumber = isNumber;
