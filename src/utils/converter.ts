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

    invertFlex(val:string){
        if(val.includes("items")){
            return val.split("items").join("justify").replace('stretch','evenly').replace('line','around');
        }
            return val.split("justify").join("items").replace('evenly','stretch').replace('around','line');
    }
    
}


export{
    Converter
}