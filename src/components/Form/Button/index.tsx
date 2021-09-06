import React from 'react'

import { FormBoxButtonProps } from '../types'

const Button: React.FC <FormBoxButtonProps> = ({type, disabled, label}) => {

    return(

        <button type = {type} disabled = {disabled}>
            <div className = "btnContent"> {label} </div>
        </button>

    )

}

export default Button