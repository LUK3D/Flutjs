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
     tag?: HTMLElement;
     child?:Widget;
     parent?:HTMLElement|Widget;
     textContent?:string;
 
     constructor(args:{tagName:string, child?:Widget, parent?:HTMLElement|Widget,text?:string}){
         this.child = args.child;
         this.parent = args.parent;
         this.render({tagName:args.tagName});
         this.addTextContent({text:args.text});
         return this;
     }
 
     render(args:{tagName:string}){
         this.tag =  document.createElement(args.tagName);
         this.tag.id = this.key;
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

    constructor(args:{tagName:string,children?:Array<Widget|ExtendedWidget>}){
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




function Column(args:{children?:Array<Widget|ExtendedWidget>}){
    return new ExtendedWidget({
        tagName:"div",
        children:args.children
    });
}

function Container(args:{child?:Widget|ExtendedWidget}):Widget{
    return new Widget({tagName:"div",child:args.child});
}


export{
    Widget,
    ExtendedWidget,
    Column,
    Container
}