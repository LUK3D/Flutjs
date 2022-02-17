export default class _Key{

    /**
     * Generates a uuid
     * @returns `string`
     */
    constructor(){
       
    }

    fromValue(val:string){
        return val;
    }
    uuidv4(): string { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    uid(): string {
    return Math.round(Math.random() * 36 ** 6).toString(36);
    }
    

    //  uuidv4() {
    //     return ("10000000"+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    //       (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    //     );
    // }
}

function Key(){
    return new _Key().uid();
}
export{
    _Key,
    Key
};