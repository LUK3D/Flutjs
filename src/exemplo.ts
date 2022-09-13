import { NativeElements } from "./core/types/index.js";
import { Widget } from "./index.js";

document.body.append(
    new Widget({
        nativeEl:{
            type:NativeElements.div,
            attributes:[]
        },
        children:[
            new Widget({
                nativeEl:{
                    type:NativeElements.h1,
                    attributes:[]
                },
                children:[
    
                ],
                key:'Teste de Chave'
            }),
            new Widget({
                nativeEl:{
                    type:NativeElements.h2,
                    attributes:[]
                },
                children:[
                    new Widget({
                        nativeEl:{
                            type:NativeElements.p,
                            attributes:[]
                        },
                        children:[
            
                        ],
                    }),
                ],
                key:'Teste de Chave4'
            }),
        ],
    }).render()
)