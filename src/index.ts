

import { Widget} from "./widgets/framework";
import {ThemeData} from "./painting/themeData"


// new Widget({tagName:"div"});

let Flutjs = {
  Widget,
  ThemeData
};
export{
  Widget,
  ThemeData
};

(<any>window).Flutjs = Flutjs;

