import React from 'react'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { BoxProps } from './../types'
import GetContrast from '../../../utils/colors/GetColorContrast'

const Item: React.FC <BoxProps> = props => { 

    const Container: React.FC = ({children}) => (
        <li className = {`box ${props.link || props.function ? 'boxHover' : ''}${props.theme ? props.theme : ''}`}> {children} </li>
    )

    const Content: React.FC = () => (
        <>
            {props.title ? <h3 className = "boxTitle"> {props.title} </h3> : props.statusTitle ? (
                <div className = {`boxTopTitleContainer ${props.theme ? GetContrast(props.theme, 'Box') : ''}`}>
                    <h3 className = "boxTopTitle"> {props.statusTitle} </h3>
                </div>
            ) : null}
            <div className = "boxContainer" style = {{padding: !props.function && !props.link ? props.padding : 0}}> {props.children} </div> 
        </>
    )

    return(

        <>
            {props.link ? (
                <Tooltip title = "Acessar" arrow>
                    <Container>
                        <Link to = {props.link}> 
                            <Content /> 
                        </Link>
                    </Container>
                </Tooltip>
            ) : props.function ? (
                <Container>
                    <Content />
                </Container>
            ) : (
                <Container>
                    <Content />
                </Container>
            )}

        </>

    )

}

export default Item