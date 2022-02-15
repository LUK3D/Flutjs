class _Validator {
    isNumber(val:string|number){
        if(!val){
            return false;
        }
        var reg = /^-?\d+\.?\d*$/;
        return reg.test(val?.toString());
    }
}

/**
 * ## Check if the value is a Digit    
 * @param val The value to be checked
 * @returns `boolean`
 */
function isNumber(val:string|number){
    return new _Validator().isNumber(val);
}

export{
    isNumber
}