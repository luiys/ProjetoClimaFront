import React from 'react'
import _ from "lodash"

const Error:React.FC = () => {

    const ErrorBox:React.FC = () => {

        return(

            <div className = "errorBox">
                <span className = "errorValue"> ? </span>
                <h3> ? </h3>
            </div>

        )

    }

    return(

        <div className = "homeBoxErrorGroup">
            {_.times(4, (i) => (
                <ErrorBox key = {i} />
            ))}
        </div>

    )

}

export default Error