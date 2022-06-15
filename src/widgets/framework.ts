import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { _BoxDecoration } from "../painting/index.js";
import { ThemeData } from "../painting/themeData.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import { AbsoluteUnits, RelativeUnits } from "../rendering/mesurementes.js";
import { Clip } from "../ui/painting.js";
import { ElementSides } from "../utils/constants.js";
import { CssProperties } from "../utils/cssprops.js";
import { ExtractCss } from "../utils/processor.js";
import { defineDecoration } from "../utils/styles.js";
import _Key, { Key } from "../utils/uuid.js";
import { isNumber } from "../utils/validator.js";

/**
 * Flutjs class to generate a new Widget
 */
export default class Widget {
  /**
   * widget key, when rendered, it will generate a key atribute to be used to track the element state.
   */
  key?: _Key | string;

  width: number | string = "auto";
  height: number | string = "auto";
  /**
   * ### Size Measurement unit
   * Defines the Units measurement of Width and Height
   */
  width_size_measurement_unit: AbsoluteUnits | RelativeUnits =
    RelativeUnits["%"];
  height_size_measurement_unit: AbsoluteUnits | RelativeUnits =
    RelativeUnits["%"];
  tag?: HTMLElement;
  child?: Widget;
  children?: Array<Widget|undefined>;
  parent?: HTMLElement;
  textContent?: string;
  decoration?: ThemeData;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  classes?: Array<string>;
  style?: string;
  boxDecoration?: _BoxDecoration;
  css?: CssProperties;
  tagName?:string;
  text?:string;
  clip?:Clip;

  constructor(args: {
    key?: _Key | string;
    tagName: string;
    child?: Widget;
    children?: Array<Widget|undefined>;
    parent?: HTMLElement;
    text?: string;
    decoration?: ThemeData;
    width?: string | number;
    height?: string | number;
    classes?: Array<string>;
    /**
     * ### Size Measurement unit
     * Defines the Units measurement of Width
     *
     * {@link AbsoluteUnits} or {@link AbsoluteUnits}
     */
    width_size_measurement_unit?: AbsoluteUnits | RelativeUnits;
    /**
     * ### Size Measurement unit
     * Defines the Units measurement of Height
     *
     * {@link AbsoluteUnits} or {@link AbsoluteUnits}
     */
    height_size_measurement_unit?: AbsoluteUnits | RelativeUnits;
    boxDecoration?: _BoxDecoration;
    css?: CssProperties;

    margin?: EdgeInsetsGeometry;
    padding?: EdgeInsetsGeometry;
    clipBehavior?:Clip
  }) {
    this.css = new CssProperties({ ...args.css?._props });
    this.tagName = args.tagName;
    this.key = args.key;
    this.child = args.child;
    this.children = args.children;
    this.parent = args.parent;
    this.render({
      tagName: args.tagName,
      text: args.text,
      classes: args.classes,
    });
    this.text = args.text;
    this.width = args.width || this.width;
    this.height = args.height || this.height;
    this.width_size_measurement_unit =
      args.width_size_measurement_unit ?? this.width_size_measurement_unit;
    this.height_size_measurement_unit =
      args.height_size_measurement_unit ?? this.height_size_measurement_unit;
    this.boxDecoration = args.boxDecoration ?? this.boxDecoration;
    this.clip = args.clipBehavior??this.clip;
    // this.css = args.css;

    if(args.key){
      this.key = args.key;
      this.setKey(args.key);
    }else{
      this.key = Key();
      this.setKey(args.key);
    }

    this.classes = args.classes;

    let paddings = args.padding?.arrayed_value("padding");
    if (paddings) {
      this.css!._props.paddingLeft = paddings![0];
      this.css!._props.paddingTop = paddings![1];
      this.css!._props.paddingRight = paddings![2];
      this.css!._props.paddingBottom = paddings![3];
    }
    let margins = args.margin?.arrayed_value("margin");
    if (margins) {
      this.css!._props.marginLeft = margins![0];
      this.css!._props.marginTop = margins![1];
      this.css!._props.marginRight = margins![2];
      this.css!._props.marginBottom = margins![3];
    }
    this.css._props.overflow = args.clipBehavior;

    if (args.boxDecoration?.color)
      this.css!._props.backgroundColor = args.boxDecoration?.color ?? "";

    if (isNumber(args.width!))
      this.css!._props.width =
        args.width!.toString() + this.width_size_measurement_unit;

    if (isNumber(args.height!))
      this.css!._props.height =
        args.height!.toString() + this.height_size_measurement_unit;

    defineDecoration(this, args.boxDecoration);
    this.css?.apply(this);

    return this;
  }

  setKey(key?: _Key | string) {
    if (key) {
      this.tag?.setAttribute("key", key.toString());
    } else {
      this.tag?.setAttribute(
        "key",
        `${this.tag!.tagName.toLowerCase()}_${this.key!.toString()}`
      );
    }
  }

  bind(){
    if(! (window as any).flutjs){
      (window as any).flutjs = {}
    }
    (window as any).flutjs[this.key!.toString()] = this.tag!.outerHTML;
  }

  render(args: { tagName: string; text?: string; classes?: Array<string> ,updating?:boolean}) {
    if(!this.tag){
      this.tag = document.createElement(args.tagName);
    }
    document.body.appendChild(this.tag);

    

    if (args.classes) {
      this.tag!.classList.add(...args.classes);
      // ctx.classes!.forEach(element => {
      // });
    }

    this.addTextContent({ text: args.text });

    if (this.child) {
      this.appendChild(this.child.tag!);
      this.extactStyle(this.child);
      this.child.bind();
      /**Rerendering all child nodes */
      if(args.updating){
        document.querySelector('[key="'+this.child.key+'"]')?.remove();
        this.child.render({tagName:this.child.tagName!, classes:this.child.classes,text:this.child.text, updating:args.updating});
      }
    }
    if (this.children) {
      let ctx = this;
      this.children.map((widget) => {
        if(widget ){
          widget.parent = ctx.tag;
          this.extactStyle(widget);
          this.appendChild(widget.tag!);
          widget.bind();
           /**Rerendering all child nodes */
          if(args.updating){
            document.querySelector('[key="'+widget.key+'"]')?.remove();
            widget.render({tagName:widget.tagName!, classes:widget.classes,text:widget.text, updating:args.updating});
          }
        }
      
      });
    }
  }
  //So.., because we want to generate beautiful websites, we need to extract the inline  css for each element.
  //TODO: Finish removing the inline css
  // For now its just extracting the last element css..
  extactStyle(widget: Widget) {
    if (!this.style) {
      this.style = this.tag!.getAttribute("style") || "";
    }
    console.log("WIDGET STYLE: ", widget.style + this.style);
    this.style = ExtractCss(widget);
    //Removendo o atributo style para deixar o código mais limpo.
    // widget.tag!.removeAttribute("style");
    console.log("STYLE2: ", this.style);
  }

  addTextContent(args: { text?: string }) {
    if (args.text) {
      if (args.text.length > 0) {
        this.tag!.textContent = args.text;
      }
    }
  }

  appendChild(el: HTMLElement) {
    this.tag?.appendChild(el);
  }
}

export { Widget };
