import { IWidget } from "./types/index.js";
/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
export declare class Widget {
    args: IWidget;
    constructor(args: IWidget);
    make(): void;
    render(): HTMLElement;
}
