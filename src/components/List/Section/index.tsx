import React from 'react'

import { SectionProps } from '../types'

const Section:React.FC <SectionProps> = ({ children, type }) => {

    return(

        <>
            {type === 'header' ? <ul className = "listSection header"> {children} </ul> : <ul className = "listSection main"> {children} </ul>}
        </>

    )

}

export default Section