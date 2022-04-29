import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const NotFound: React.FC = () => {

    const url = window.location.href

    return(

        <>
            <Redirect to="/" />
        </>

    )

}

export default NotFound