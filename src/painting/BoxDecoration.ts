import {Color, Colors} from "./colors.js"
class _BoxDecation {
    color?:string;

    constructor(args:{color?:Color}){
        this.color = args.color?.value;
    }

    

}

function BoxDecation(args:{color?:Color}){
    return new _BoxDecation(args);
}

export{
    BoxDecation,
    _BoxDecation
}

