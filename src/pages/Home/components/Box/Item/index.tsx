import React from 'react'

import { BoxItemProps } from '../types'

const Item:React.FC <BoxItemProps> = ({children, background}) => {

    return <li className = {`homeBox ${background ? 'background' : ''}`}> {children} </li>

}

export default Item