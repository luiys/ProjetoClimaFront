import React from 'react'

import { FormBoxSectionProps } from '../types'

const Section:React.FC <FormBoxSectionProps> = ({children, name}) => {
  
    return <div className = {`formFormBoxSection ${name}`}> {children} </div>

}

export default Section