import React from 'react'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { BoxProps } from './../types'

const Item: React.FC <BoxProps> = props => { 

    return(

        <>
            {props.link ? (

                <Tooltip title = "Acessar" arrow>
                    <li className = {`box boxLink ${props.theme ? props.theme : ''}`}>
                        <Link to = {props.link}> 
                            {props.title ? <h3 className = "boxTitle"> {props.title} </h3> : props.statusTitle ? <div className = "boxTopTitleContainer"><h3 className = "boxTopTitle"> {props.statusTitle} </h3></div> : null}
                            <div className = "boxContainer"> {props.children} </div> 
                        </Link>
                    </li>
                </Tooltip>

            ) : (

                <li className = {`box ${props.theme ? props.theme : ''}`}>
                    {props.title ? <h3 className = "boxTitle"> {props.title} </h3> : props.statusTitle ? <div className = "boxTopTitleContainer"><h3 className = "boxTopTitle"> {props.statusTitle} </h3></div> : null}
                    <div className = "boxContainer" style = {{padding: props.padding}}> {props.children} </div>
                </li>

            )}
        </>

    )

}

export default Item
