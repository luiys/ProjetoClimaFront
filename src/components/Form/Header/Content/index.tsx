import React from 'react'

import { FormHeaderContentProps } from '../../types'

const Content:React.FC <FormHeaderContentProps> = ({children, name}) => {

    return <li className = {`headerContent ${name}`}> {children} </li>

}

export default Content