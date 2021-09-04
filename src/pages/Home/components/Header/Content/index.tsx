import React from "react"

import { ContentProps } from "../types"

const Content:React.FC <ContentProps> = ({children, name}) => {
    return <li className = {`homeHeaderContent ${name}`}> {children} </li>
}

export default Content