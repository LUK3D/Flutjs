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
     key:Key|string;

     width:number|string = "auto";
     height:number|string = "auto";

     tag?: HTMLElement;
     child?:Widget;
     children?:Array<Widget>;
     parent?:HTMLElement;
     textContent?:string;
     decoration?:ThemeData
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
 
     constructor(args:{key?:Key|string, tagName:string, child?:Widget, children?:Array<Widget>, parent?:HTMLElement,text?:string,decoration?:ThemeData,width?:string|number,height?:string|number}){
         this.child = args.child;
         this.children = args.children;
         this.parent = args.parent;
         this.render({tagName:args.tagName, text:args.text});
         this.width = args.width || this.width;
         this.height = args.height || this.height;
         this.key = args.key || new Key().uuidv4();
         return this;
     }
 
     render(args:{tagName:string,text?:string}){
         this.tag =  document.createElement(args.tagName);
         document.body.appendChild(this.tag);
         this.tag.id = (this.key ||  new Key().uuidv4()).toString();
         this.tag.style.width = `${this.width}`;
         this.tag.style.height = `${this.height}`;
         this.addTextContent({text:args.text});

         if(this.child){
             this.appendChild(this.child.tag!)
         }
         if(this.children){
             let ctx = this;
             this.children.map((widget)=>{
                widget.parent = ctx.tag;
                this.appendChild(widget.tag!)

            });
        }
     }
  

     addTextContent(args:{text?:string}){

        if(args.text){
            if(args.text.length>0)
            {
                // let textEl = document.createTextNode(args.text);
                this.tag!.textContent = args.text;
            }
        }   
     }

     appendChild(el:HTMLElement){
        this.tag?.appendChild(el);
    }
}




export{
    Widget,
}