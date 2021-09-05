import React from 'react'

import { BoxItemProps } from '../types'

const Item:React.FC <BoxItemProps> = ({children, background, theme}) => {

    return <div className = {`homeBox ${background ? 'background' : theme ? `color-mode ${theme}` : ''}`}> {children} </div>

}

export default Item