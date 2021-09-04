import React from 'react'
import Icon from '@mdi/react'
import { Tooltip } from '@material-ui/core'

import { ItemProps } from '../types'

const Item:React.FC <ItemProps> = ({ tooltip, func, link, blank, icon }) => {

    return(

        <>

            {tooltip ? (

                <Tooltip title = {tooltip} arrow placement = "left">
                    <button onClick = {() => func}>
                        {link ? (
                            <a href = {link} target = {blank ? '_blank' : '_self'} rel = "noreferrer" >
                                <Icon path = {icon} size = "24px" />
                            </a>
                        ) : <Icon path = {icon} size = "24px" />}
                    </button>
                </Tooltip>

            ) : (

                <button onClick = {() => func}>
                    {link ? (
                        <a href = {link} target = {blank ? '_blank' : '_self'} rel = "noreferrer" >
                            <Icon path = {icon} size = "24px" />
                        </a>
                    ) : <Icon path = {icon} size = "24px" />}
                </button>

            )}

        </>

    )

}

export default Item