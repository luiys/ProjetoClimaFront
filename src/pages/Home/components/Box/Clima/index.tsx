import React from 'react'

import { BoxClimaProps, BoxClimaTextsProps } from '../types'

const Clima:React.FC <BoxClimaProps> = ({current, max, min, feels}) => {

    const ClimaTextContainer:React.FC <BoxClimaTextsProps> = ({title, text}) => {

        return(

            <div className = "climaBox">
                <span className = "climaText"> {text}°c </span>
                <h3> {title} </h3>
            </div>

        )

    }

    return(

        <div className = "homeBoxClimaGroup">
            <ClimaTextContainer title = "Atual" text = {current.toFixed(1)} />
            <ClimaTextContainer title = "Máxima" text = {max.toFixed(0)} />
            <ClimaTextContainer title = "Mínima" text = {min.toFixed(0)} />
            <ClimaTextContainer title = "Sensação" text = {feels.toFixed(0)} />
        </div>

    )

}

export default Clima