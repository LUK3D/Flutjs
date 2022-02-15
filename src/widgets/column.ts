import Widget from "./framework";

class  _Column extends Widget {
    constructor(args:{children?:Array<Widget>}) {
        super({
            tagName:"div",
            children:args.children
        })
    }
}

function Column(args:{children?:Array<Widget>}){
    return new _Column({children:args.children});
}
export {
    Column
}