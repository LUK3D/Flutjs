

import { Widget, ExtendedWidget} from "./widgets/framework";
import {ThemeData} from "./painting/themeData"


// new Widget({tagName:"div"});

let Flutjs = {
  Widget,
  ExtendedWidget,
  ThemeData
};
export{
  ExtendedWidget,
  Widget,
  ThemeData
};

(<any>window).Flutjs = Flutjs;

