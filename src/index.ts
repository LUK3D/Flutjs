import { Widget, ExtendedWidget} from "./widgets/framework";


// new Widget({tagName:"div"});

let Flutjs = {
  Widget,
  ExtendedWidget,
};
export{
  ExtendedWidget,
  Widget,
};

(<any>window).Flutjs = Flutjs;

