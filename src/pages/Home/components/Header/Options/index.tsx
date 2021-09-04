import React from "react"
import { Icon as MdiIcon } from '@mdi/react'

import { IconProps } from '../types'
import { Tooltip } from "@material-ui/core"

const Group:React.FC = ({children}) => {

    return <ul id = "homeHeaderOptionsGroup"> {children} </ul>

}

const Item:React.FC = ({children}) => {

    return <li className = "optionItem"> {children} </li>

}

const Icon:React.FC <IconProps> = ({tooltip, icon, size, onClick}) => {

    return(

        <Tooltip title = {tooltip} arrow>
            <div className = "optionIcon" onClick = {() => onClick ? onClick() : null}>
                <MdiIcon path = {icon} size = {size} />
            </div>
        </Tooltip>

    )

}

const Options = {
    Group, Item, Icon
}

export default Options