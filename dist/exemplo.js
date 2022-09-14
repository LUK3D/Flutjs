import { NativeElements } from "./core/types/index.js";
import { Widget } from "./index.js";
document.body.append(new Widget({
    style: {
        selector: "mainApp",
        styles: [
            'width:100vw',
            'height:100vh',
            'background:grey',
            'text-color:green'
        ]
    },
    key: 'Flutten App',
    isBase: true,
    nativeEl: {
        type: NativeElements.div,
        attributes: []
    },
    children: [
        new Widget({
            style: {
                selector: "appBar",
                styles: [
                    'width:100vw',
                    'height:40px',
                    'background:white',
                    'text-color:green'
                ]
            },
            nativeEl: {
                type: NativeElements.h1,
                attributes: [
                    {
                        type: 'class',
                        value: 'w-screen h-40 bg-sky-500'
                    }
                ]
            },
            children: [],
            key: 'Teste de Chave'
        }),
        new Widget({
            nativeEl: {
                type: NativeElements.h2,
                attributes: []
            },
            children: [
                new Widget({
                    nativeEl: {
                        type: NativeElements.p,
                        attributes: []
                    },
                    children: [],
                }),
            ],
            key: 'Teste de Chave4'
        }),
    ],
}).source);
//# sourceMappingURL=exemplo.js.map