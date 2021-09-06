import React from 'react'

import { FormBoxProps } from '../types'

const Box:React.FC <FormBoxProps> = ({children, title}) => {

    return(

        <div id = "formBox">
            <div id = "formBoxHeader">
                <h2> {title} </h2>
            </div>
            <div id = "formBoxContainer"> {children} </div>
        </div>

    )

}

export default Box