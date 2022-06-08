var _Validator = /** @class */ (function () {
    function _Validator() {
    }
    _Validator.prototype.isNumber = function (val) {
        if (!val) {
            return false;
        }
        var reg = /^-?\d+\.?\d*$/;
        return reg.test(val === null || val === void 0 ? void 0 : val.toString());
    };
    return _Validator;
}());
/**
 * ## Check if the value is a Digit
 * @param val The value to be checked
 * @returns `boolean`
 */
function isNumber(val) {
    return new _Validator().isNumber(val);
}
export { isNumber };
