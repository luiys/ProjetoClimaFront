import React from 'react';
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { BoxLinkLabelProps } from './../types'

const LinkLabel: React.FC <BoxLinkLabelProps> = ({ link, route, label }) => (

    <div className = "boxLinkLabelContainer">
        <Tooltip title = "Acessar" arrow placement = "right">
            <>
                {link ? <a href = {link} target = {`_blank`} > {label} </a> : null}
                {route ? <Link to = {route}> {label} </Link> : null}
            </>
        </Tooltip>
    </div>

)


export default LinkLabel