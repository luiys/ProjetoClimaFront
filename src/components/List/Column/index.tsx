import React from 'react'

import { ColumnProps } from '../types'

const Column:React.FC <ColumnProps> = ({ type, color, text }) => {

    return(

        <>
        
            {type === 'default' ? (

                color ? (
                    <li className = "listColumn" style = {{color: color, fontWeight: "bold"}}> {text} </li>
                ) : (
                    <li className = "listColumn"> {text} </li>
                )

            ) : null}
        
        </>

    )

}

export default Column