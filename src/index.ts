

import { Widget} from "./widgets/framework.js";
import {ThemeData} from "./painting/themeData.js"


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

