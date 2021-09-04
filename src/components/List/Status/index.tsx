import React from 'react'
import { Dots } from "react-activity"
import "react-activity/dist/Dots.css"

const Status: React.FC = () => {

    return <li className = "listStatus"> <Dots color = "var(--color-txt-t)" size = {48} /> </li>

}

export default Status