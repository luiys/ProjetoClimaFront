import React from 'react'
import { Icon as MdiIcon } from '@mdi/react'

import { BoxIconProps } from '../types'

const Icon: React.FC <BoxIconProps> = ({ icon, size, title }) => {

    return(

        <div className = "boxIconContainer">
            <MdiIcon path = {icon} size = {size ? size : '72px'} />
            {title ? <h4> {title} </h4> : null} 
        </div>

    )

}

export default Icon