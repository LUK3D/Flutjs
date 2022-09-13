import { IWidget } from "./types/index.js";
import { uuid } from "./utils/generator/uuid.js";

/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
export class Widget {
    args:IWidget;
    constructor(args:IWidget) {
        this.args = args
    }


    make(){
        this.args.domElement = document.createElement(this.args.nativeEl?.type??'div');
        this.args.domElement.setAttribute('fjs-key',this.args.key??uuid(5));
    }


    render():HTMLElement{
        this.make();
        if(this.args.children.length>0){
            this.args.children.forEach(child => {
              this.args.domElement!.appendChild(child.render());
            });
        }
        return this.args.domElement!;
    }

}