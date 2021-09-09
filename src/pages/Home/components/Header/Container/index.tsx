import React from "react"
import GetContrast from "../../../../../utils/colors/GetColorContrast"

import { ContainerProps } from "../types"

const Container:React.FC <ContainerProps> = ({children, theme}) => {

    return(

        <header id = "homeHeader" className = {`color-theme ${theme} ${GetContrast(theme, 'HomeHeader')}`}>
            <ul id = "homeHeaderContainer"> {children} </ul>
        </header>

    )

}

export default Container