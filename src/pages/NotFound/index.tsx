import React from 'react'
import { Link } from 'react-router-dom'

import { sadEmojis } from '../../utils/emojis'
import GetRandomEmoji from '../../utils/emojis/GetRandomEmoji'

const NotFound: React.FC = () => {

    const url = window.location.href

    return(

        <>
            <h1> 404 </h1>
            <h2> {url} </h2>
            <p> Não foi encontrado {GetRandomEmoji(sadEmojis)} </p>
            <Link to = "/"> Voltar à home </Link>
        </>

    )

}

export default NotFound