import React from 'react'

import { BoxGroupProps } from '../types'

const BoxGroup: React.FC <BoxGroupProps> = ({ children, columns }) => (
    <ul className = "boxGroup" style = {{gridTemplateColumns: `repeat(${columns}, 1fr)`}} data-columns = {columns}> {children} </ul>
)

export default BoxGroup