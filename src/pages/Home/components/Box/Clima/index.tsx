import React from 'react'

import { BoxClimaProps, BoxClimaTexts } from '../types'

const Clima:React.FC <BoxClimaProps> = ({current, max, min}) => {

    const ClimaTextContainer:React.FC <BoxClimaTexts> = ({title, text}) => {

        return(

            <div className = "climaTextContainer">
                <span className = "climaText"> {text}°c </span>
                <h3> {title} </h3>
            </div>

        )

    }

    return(

        <div className = "homeBoxClimaContainer">
            <ClimaTextContainer title = "Atual" text = {current} />
            <ClimaTextContainer title = "Máxima" text = {max} />
            <ClimaTextContainer title = "Mínima" text = {min} />
        </div>

    )

}

export default Clima