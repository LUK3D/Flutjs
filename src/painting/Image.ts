class _Image {
    constructor(args:{url?:string}) {
        
    }

    fromGradient(){
        
    }
}


function Image(args:{url?:string}){
    return new _Image({url:args.url});
}

export{
    Image,
    _Image
}