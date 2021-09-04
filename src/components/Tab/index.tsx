import React, { useState } from 'react'

import './styles.scss'
import { TabProps } from './types'

const Tab: React.FC <TabProps> = props => {

    const [visibleTab, setVisibleTab] = useState(props.data[0].key)
    const [lenght] = useState(props.data.length)

    const LabelGroup = props.data.map((label: any) => {
     
        return <li key = {label.key} className = {visibleTab === label.key ? 'tabLabel active' : 'tabLabel'} onClick = {() => setVisibleTab(label.key)}> {label.label} </li>

    }) 

    const PanelGroup = props.data.map((panel: any) => {

        return(

            <li key = {panel.key} className = {visibleTab === panel.key ? "tabPanel active" : "tabPanel"}>       
                <div className = "tabPanelContainer"> 
                    {panel.title ? <h3 className = "tabPanelTitle"> {panel.title} </h3> : null}
                    {panel.component}
                </div>      
            </li>

        )

    })

    return(

        <div className = "tabContainer">
            <ul className = "tabLabelGroup group" style = {{gridTemplateColumns: `repeat(${lenght}, 1fr)`}}> {LabelGroup} </ul>
            <ul className = "tabPanelGroup group"> {PanelGroup} </ul>
        </div>

    )

}

export default Tab