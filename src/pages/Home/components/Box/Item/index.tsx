import React from 'react'

import { BoxItemProps } from '../types'

const Item:React.FC <BoxItemProps> = ({children, background, theme}) => {

    return <li className = {`homeBox ${background ? 'background' : theme ? `color-mode ${theme}` : ''}`}> {children} </li>

}

export default Item