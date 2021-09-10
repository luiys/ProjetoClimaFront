import React from 'react'

import { BoxClimaProps, BoxClimaTextsProps } from '../types'

const Clima:React.FC <BoxClimaProps> = ({current, max, min, feels}) => {

    const ClimaTextContainer:React.FC <BoxClimaTextsProps> = ({title, text}) => {

        return(

            <div className = "homeBox climaBox">
                <span className = "climaText"> {text}°c </span>
                <h3> {title} </h3>
            </div>

        )

    }

    return(

        <div className = "homeBoxGroup homeBoxClimaGroup">
            <ClimaTextContainer title = "Atual" text = {current} />
            <ClimaTextContainer title = "Máxima" text = {max} />
            <ClimaTextContainer title = "Mínima" text = {min} />
            <ClimaTextContainer title = "Sensação" text = {feels.toFixed(0)} />
        </div>

    )

}

export default Clima