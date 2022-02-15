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
         this.render({tagName:args.tagName});
         this.addTextContent({text:args.text});
         this.width = args.width || this.width;
         this.height = args.height || this.height;
         this.key = args.key || new Key().uuidv4();

         return this;
     }
 
     render(args:{tagName:string}){
         this.tag =  document.createElement(args.tagName);
         this.tag.id = (this.key ||  new Key().uuidv4()).toString();
         this.tag.style.width = `${this.width}`;
         this.tag.style.height = `${this.height}`;
         
        
         if(this.child){
             this.tag.appendChild(this.child.tag!);
         }else  if(this.children){
             let ctx = this;
             this.children.map((widget)=>{

                widget.parent = ctx.tag;
                console.log("TAGS: ", widget.tag!.tagName);
                
                ctx.tag!.appendChild(widget.tag!);
                console.log("TAGS->: ", ctx.tag?.outerHTML);

             });
        }
        else{
            
            // console.log("No parent: ",this.tag);
            this.addParent(this.tag);
         }
     }
     
 
     addParent(el:HTMLElement){
         
         if(this.parent){
             console.log("NO_BODY->: ", el.outerHTML);
             this.tag!.appendChild(el);
         }else{
            console.log("BODY->: ", el.outerHTML);
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
        console.log("Parent: ", this.tag!.tagName," Child: ",el.tagName);
        this.tag!.appendChild(el);
    }
}




export{
    Widget,
}