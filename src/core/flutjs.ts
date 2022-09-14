import { IWidget, IWidgetResult, IWidgetResultStyle } from "./types/index.js";
import { uuid } from "./utils/generator/uuid.js";

/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
export class Widget {
    args:IWidget;
    source?:HTMLElement;
    className?:String;
    styles:Array<IWidgetResultStyle> = [];
    style?:IWidgetResultStyle;

    constructor(args:IWidget) {
        this.args = args;
        this.className = args.className;

        this.style = args.style;

        if(args.isBase){
           this.source =  this.render().dom;
           let finalStyle = this.makeStyles();
           console.log(finalStyle, this.args.nativeEl?.type);
           this.source!.innerHTML+=`<style>${finalStyle}</style>`;
        }
    }

    


    make(){
        this.args.domElement = document.createElement(this.args.nativeEl?.type??'div');
        this.args.domElement.setAttribute('fjs-key',this.args.key??uuid(5));
        this.args.nativeEl?.attributes?.map(attr=>{
            this.args.domElement?.setAttribute(attr.type,attr.value);
        });

    

        
        
    }


    render():IWidgetResult{
        this.make();
        if(this.args.children.length>0){
            this.args.children.forEach(child => {
                let rendered = child.render();
                this.args.domElement!.appendChild(rendered.dom);
                
                this.styles.push(...rendered.styles);
                console.log('---', this.styles);
            });
        }

        if(this.style){
            this.args.domElement?.classList.add(this.style?.selector!);
            this.styles.push(this.style);
        }
         
        let res:IWidgetResult =  {
            dom:this.args.domElement!,
            styles:this.styles!
        };

        return res;
    }

    makeStyles():string{
        
       let res =  this.styles.map(style=>{
           return `
            .${style.selector}{
                ${style.styles.join(';\n')};
            }
            `
        }).join('\n');

        console.log("FINAL!",res);


        return res;
    }


    getSource():HTMLElement{
    
       return this.source!;
    }
}