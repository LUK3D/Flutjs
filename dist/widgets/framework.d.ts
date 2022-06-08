import { ThemeData } from "../painting/themeData.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex.js";
import _Key from "../utils/uuid.js";
/**
 * Flutjs class to generate a new Widget
 */
export default class Widget {
    /**
     * widget key, when rendered, it will generate a key atribute to be used to track the element state.
     */
    key?: _Key | string;
    width: number | string;
    height: number | string;
    tag?: HTMLElement;
    child?: Widget;
    children?: Array<Widget>;
    parent?: HTMLElement;
    textContent?: string;
    decoration?: ThemeData;
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
    classes?: Array<string>;
    style?: string;
    constructor(args: {
        key?: _Key | string;
        tagName: string;
        child?: Widget;
        children?: Array<Widget>;
        parent?: HTMLElement;
        text?: string;
        decoration?: ThemeData;
        width?: string | number;
        height?: string | number;
        classes?: Array<string>;
    });
    setKey(key?: _Key | string): void;
    render(args: {
        tagName: string;
        text?: string;
        classes?: Array<string>;
    }): void;
    extactStyle(widget: Widget): void;
    addTextContent(args: {
        text?: string;
    }): void;
    appendChild(el: HTMLElement): void;
}
export { Widget };
