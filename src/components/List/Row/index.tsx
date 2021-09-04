import React from 'react'

import { RowProps } from '../types'

const Row:React.FC <RowProps> = ({ children, color }) => {

    return <li className = "listRow"><ul className = "listRowContainer" style = {{color: color}}> {children} </ul></li>

}

export default Row