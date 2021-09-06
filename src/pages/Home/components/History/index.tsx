import React from 'react'

export interface HistoryProps {
    city: string,
    current: number,
    max: number,
    min: number,
}

const History: React.FC <HistoryProps> = ({city, current, max, min}) => {

    return(

        <li className = "homeHistoryBox">
            <h4> {city} </h4>
            <div className = "historyValues">
                <h5> {current.toFixed(1)}°c </h5>
                <h5> {max.toFixed(0)}°c </h5>
                <h5> {min.toFixed(0)}°c </h5>
            </div>
        </li>

    )

}

export default History