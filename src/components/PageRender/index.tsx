import React, { useEffect } from 'react'

import './styles.scss'
import { PageRenderProps } from './types'

import ScrollReset from '../../utils/ScrollReset'

import Main from '../Main'

const PageRender: React.FC <PageRenderProps> = props => {

    useEffect(() => {
        document.title = props.title
    }, [props.title])

    return(

        <>
            {props.pageType === 'default' ? (

                <div id = "wrapper" className = {`wrapperDefault ${props.theme1}`} data-theme = {props.theme1} data-page = {props.name}>
                    <ScrollReset />
                    <Main name = {props.name}> {props.component} </Main>
                </div>

            ) : null}
            {props.pageType === 'error' ? (

                <div id = "wrapper" className = {`wrapperError ${props.theme1}`} data-theme = {props.theme1} data-page = {props.name}>
                    <ScrollReset />
                    {props.component}
                </div> 

            ) : null}
        </>

    )

}

export default PageRender