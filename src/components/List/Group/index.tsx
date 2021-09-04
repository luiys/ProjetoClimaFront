import React from 'react'

import { GroupsProps } from '../types'

const Group:React.FC <GroupsProps> = ({ children, id }) => {

    return <div id = {`list${id}`} className = "listContainer"> {children} </div>

}

export default Group