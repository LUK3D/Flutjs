import { IWidget, IWidgetResult, IWidgetResultStyle } from "./types/index.js";
/**
 * ## 🔥Widget
 * 🚀 Base Widget class that represents all the Graphic elements of the page
 */
export declare class Widget {
    args: IWidget;
    source?: HTMLElement;
    className?: String;
    styles: Array<IWidgetResultStyle>;
    style?: IWidgetResultStyle;
    constructor(args: IWidget);
    make(): void;
    render(): IWidgetResult;
    makeStyles(): string;
    getSource(): HTMLElement;
}
