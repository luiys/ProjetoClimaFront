import React from 'react'
import { useHistory } from 'react-router'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { Tooltip } from '@material-ui/core'

import { SectionContainerProps } from './types'

const Container: React.FC <SectionContainerProps> = props => {

    const history = useHistory()

    const SectionTitleContent: React.FC = ({ children }) => <div className = "sectionTitleContent"> {children} </div>

    return(

        <div className = "sectionContainer">
            {props.title || props.titleComplement || props.subTitle ? (
                <div className = "sectionTitlesContainer">
                    {props.goBack ? (
                        <SectionTitleContent>
                            <Tooltip title = "Voltar" arrow placement = "right">
                                <div className = "sectionGoBackContainer" onClick = {history.goBack}>
                                    <Icon path = {mdiArrowLeft} size = "18px" />
                                    <h3> Voltar </h3> 
                                </div>
                            </Tooltip>
                        </SectionTitleContent>
                    ) : null}
                    {props.title ? (
                        <SectionTitleContent>
                            <h1 className = "sectionTitle"> {props.title} </h1>
                            {props.titleComplement ? <h2 className = "sectionTitleComplement"> {props.titleComplement} </h2> : null}
                        </SectionTitleContent>
                    ) : null}
                    {props.subTitle ? <SectionTitleContent><h2 className = "sectionSubTitle"> {props.subTitle} </h2></SectionTitleContent> : null}
                    
                </div>
            ) : null}
            {props.children}
        </div>

    )

}

export default Container