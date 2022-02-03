import { ThemeData } from "../painting/themeData";
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex";
import Key from "../utils/uuid";

/**
 * Flutjs class to generate a new Widget
 */
export default class Widget{
    /**
     * widget Id, when rendered, it will generate am id
     */
     key = new Key().uuidv4();

     width:number|string = "auto";
     height:number|string = "auto";

     tag?: HTMLElement;
     child?:Widget;
     parent?:HTMLElement|Widget;
     textContent?:string;
     decoration?:ThemeData

 
     constructor(args:{tagName:string, child?:Widget, parent?:HTMLElement|Widget,text?:string,decoration?:ThemeData,width?:string|number,height?:string|number}){
         this.child = args.child;
         this.parent = args.parent;
         this.render({tagName:args.tagName});
         this.addTextContent({text:args.text});
         this.width = args.width || this.width;
         this.height = args.height || this.height;
         return this;
     }
 
     render(args:{tagName:string}){
         this.tag =  document.createElement(args.tagName);
         this.tag.id = this.key;
         this.tag.style.width = `${this.width}`;
         this.tag.style.height = `${this.height}`;
         
         if(this.child){
             this.tag.appendChild(this.child.tag!);
         }else{
            this.addParent(this.tag);
         }
     }
     
 
     addParent(el:HTMLElement){
         if(this.parent){
             this.tag!.appendChild(el);
         }else{
             document.body.appendChild(el);
         }
     }

     addTextContent(args:{text?:string}){

        if(args.text){
            if(args.text.length>0)
            {
                let textEl = document.createTextNode(args.text);
                this.tag?.appendChild(textEl);
            }
        }   
     }

     appendChild(el:HTMLElement){
        this.tag!.appendChild(el);
    }
}


class ExtendedWidget extends Widget{
    children?:Array<Widget|ExtendedWidget>;
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
    

    constructor(args:{
        tagName:string,
        children?:Array<Widget|ExtendedWidget>}){
        super({tagName:args.tagName});

        this.buildChilds({children:args.children});

    }

    addStyle(){
        this.tag?.classList.add("flex");

    }

    buildChilds(args:{children?:Array<Widget|ExtendedWidget>}){
        if(args.children){
            args.children.forEach(element => {
                this.appendChild(element.tag!);
            });
        }
        
    }
}








export{
    Widget,
    ExtendedWidget,
}