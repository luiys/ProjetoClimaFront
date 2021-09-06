import { ColorsTheme } from "./Colors/ColorsThemes"
import GetRandomInt from "./GetRandomInt"

export default function GetColorTheme(type: string | undefined){

    const RandomColor = () => {
        let randomIndex = GetRandomInt(0, ColorsTheme.length)
        return ColorsTheme[randomIndex]
    }

    if(type){
        let findColor = ColorsTheme.find(color => color === type)
        return findColor ? findColor : RandomColor
    }else{
        return RandomColor
    }

}