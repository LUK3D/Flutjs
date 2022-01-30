"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Key {
    /**
     * Generates a uuid
     * @returns `string`
     */
    constructor() {
        this.uuidv4();
    }
    uuidv4() {
        return ("10000000" + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
    }
}
exports.default = Key;
exports = {
    Key
};
