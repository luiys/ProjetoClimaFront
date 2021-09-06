import React from 'react'

import { FormBoxLabelProps } from '../types'

const Label:React.FC <FormBoxLabelProps> = ({id, label}) => {

    return(

        <div className = "labelContainer" >
            <label htmlFor = {id}> {label} </label>
        </div>

    )

}

export default Label