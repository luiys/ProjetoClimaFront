import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { sadEmojis } from '../../utils/Emojis'
import GetRandomEmoji from '../../utils/Emojis/GetRandomEmoji'

const NotFound: React.FC = () => {

    const url = window.location.href

    return(

        <>
            <Redirect to="/" />
        </>

    )

}

export default NotFound