
import { ColorsTheme } from "./Colors/ColorsThemes"
import GetRandomInt from "./GetRandomInt"

export default function GetColorTheme(color: string | undefined, currentColor: string | undefined){

    const RandomColor = () => {

        let colorIndex

        do{
            colorIndex = GetRandomInt(0, ColorsTheme.length)
        }while(ColorsTheme[colorIndex] === currentColor)  

        return ColorsTheme[colorIndex]

    }

    if(color){
        let findColor = ColorsTheme.find(findColor => findColor === color)
        return findColor ? findColor : RandomColor
    }else{
        return RandomColor
    }

}