import React from 'react'

import './styles.scss'
import * as Types from './types'

import Container from './Container'

export const Section: React.FC <Types.SectionProps> = props => {

    return(

        <>
        
            {props.type === 'default' ? (
                <section id = {`section${props.name}`}>
                    <Container
                        title = {props.title}
                        titleComplement = {props.titleComplement}
                        subTitle = {props.subTitle}
                        goBack = {props.goBack}
                    > {props.children} </Container>
                </section>    
            ) : null}
        
        </>

    )

}