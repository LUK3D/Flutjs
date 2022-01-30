import { Widget, ExtendedWidget } from "./widgets/framework";


// new Widget({tagName:"div"});

module.exports = {
  Widget,
  ExtendedWidget,
};


//** THIS IS AN EXAMPLE CODE */

new ExtendedWidget({
    tagName: "div",
    children: [
      new Widget({ tagName: "div" , text:"Teste basico!!"}),
      new Widget({ tagName: "p" }),
      new ExtendedWidget({
        tagName: "div",
        children: [
          new Widget({
            tagName: "textarea",
            text:"LUK3D",
          }),
          new Widget({
            tagName: "div",
            child: new ExtendedWidget({
              tagName: "nav",
              children: [
                new Widget({ tagName: "a", text:"Vamos la ver se funciona" }),
                new Widget({ tagName: "a" }),
                new Widget({ tagName: "a" }),
                new Widget({ tagName: "a" }),
              ],
            }),
          }),
        ],
      }),
    ],
  });