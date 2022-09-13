/**
 * SOURCE: 😊
 * https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
 */
var lut = [];
for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}
export function uuid(length) {
    var finalres = window.URL.createObjectURL(new Blob([]));
    finalres = finalres.substring(finalres.length - 36);
    return (length) ? finalres.substring(0, length) : finalres;
}
//# sourceMappingURL=uuid.js.map