import React from 'react'
import { Icon as MdiIcon } from '@mdi/react'
import { mdiDatabaseOff, mdiCloudSearch } from '@mdi/js'

import './styles.scss'
import { MessageProps, NoReturnProps } from './types'

const NoReturn: React.FC <NoReturnProps> = ({ jsxType, errorType, message }) => {

    const Content: React.FC = () => (

        <>
            <Icon />
            <Message text = {message} />
        </>

    )

    const Icon:React.FC = () => (
        
        <MdiIcon
            path = {errorType === 'databaseError' ? mdiDatabaseOff : mdiCloudSearch}
            size = "100px"
        />

    )
    
    const Message:React.FC <MessageProps> = ({ text }) => (

        <p> {text ? text : errorType === 'databaseError' ? 'Erro na base de dados' : 'Não foi possível encontrar resultados'} </p>

    )

    return(

        <>
            {jsxType === 'list' ? (
                <li className = "noReturnContainer">
                    <Content />
                </li>
            ) : (
                <div className = "noReturnContainer">
                    <Content />
                </div>
            )}
        </>

    )

}

export default NoReturn