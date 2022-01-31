import  { Column, Container, MaterialApp, Scaffold} from './material'
import { ThemeData } from './painting/themeData'

MaterialApp(
    {
        title:"App de teste",
        theme: new ThemeData(
        ),
        home:Scaffold({
            body:Container({child:Column({
                children:[

                ]
            })})
        }
        )
    }
)