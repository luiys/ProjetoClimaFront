import React from "react"
import SetBestTheme from "../../../../../utils/SetBestTheme"

import { ContainerProps } from "../types"

const Container:React.FC <ContainerProps> = ({children, theme}) => {

    return(

        <header id = "homeHeader" className = {`color-theme ${theme} ${SetBestTheme(theme, 'HomeHeader')}`}>
            <ul id = "homeHeaderContainer"> {children} </ul>
        </header>

    )

}

export default Container