

function replaceOrCreate(slector:string, element:string){
    var oldElement = document.querySelector(slector); //any element to be fully replaced
    const newItem = document.createElement('div');
    newItem.innerHTML = element;
    if(oldElement){
        oldElement.innerHTML = '';
        oldElement.appendChild(newItem.children[0])
      
    }

    return newItem;


    // var str = element; //it can be anything
    //  var Obj = document.querySelector(slector); //any element to be fully replaced
    //  if(Obj!.outerHTML) { //if outerHTML is supported
    //      Obj!.replaceChild(Obj!.firstChild!, htmlToElement(str)!); ///it's simple replacement of whole element with contents of str var
    //      return Obj!.outerHTML
    //  }
    

   
}

function htmlToElement(html:string) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.children[0];
}

export{
    replaceOrCreate,
    htmlToElement
}