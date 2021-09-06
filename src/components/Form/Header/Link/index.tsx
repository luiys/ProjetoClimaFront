import { Tooltip } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { FormHeaderLinkProps } from '../../types'

const Link:React.FC <FormHeaderLinkProps> = ({link, tooltip, label}) => {

    return(

        <Tooltip title = {tooltip} arrow>
            <NavLink exact to = {link} activeClassName = "active">
                <span className = "headerLinkLabel"> {label} </span>
            </NavLink>
        </Tooltip>

    )

}

export default Link