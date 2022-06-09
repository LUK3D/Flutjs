import { Mesurements } from "./constants.js";
import { ConversioException } from "./FlutExeption.js";
import { isNumber } from "./validator.js";

class Converter {
    val?:string|number;
    constructor() {
    }

    toNumber(val?:string|number){

        if(!val){
            return 0;
        }
        this.val = val;
        if(!isNumber(this.val)){
            var v = this.val;
            Mesurements.forEach(element => {
                if(isNumber(v)){
                    this.val = this.val!.toString().split(element).join("");
                }else{
                    ConversioException({message:"Invalid Number: "+ v.toString()})
                }
            });
        }
        return Number.parseFloat(this.val!.toString());
    }
}

export{
    Converter
}