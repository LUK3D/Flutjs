import Widget, { ExtendedWidget } from "./framework";

class  _Column extends ExtendedWidget {
    constructor(args:{children?:Array<Widget|ExtendedWidget>}) {
        super({
            tagName:"div",
            children:args.children
        })
    }
}

function Column(args:{children?:Array<Widget|ExtendedWidget>}){
    return new _Column({children:args.children});
}
export {
    Column
}