import { Widget } from "../flutjs.js";
/**
 * ## 🔥 Native element Atributes
 * The attributes are composed of type and Values
 */
export interface INativeElementAttribute {
    type: string;
    value: string;
}
/**
 * Html Native Elements
 */
export declare enum NativeElements {
    div = "div",
    p = "p",
    h1 = "h1",
    h2 = "h2",
    input = "input"
}
export interface INativeElement {
    type: NativeElements;
    attributes?: Array<INativeElementAttribute>;
}
export interface IWidget {
    /** 🗝️ Unique code to Identify each DOM element */
    key?: string;
    children: Array<Widget>;
    /**⚠️ If not provided the element will be an html div */
    nativeEl?: INativeElement;
    domElement?: HTMLElement;
}
