import React from 'react'

import Content from './Content'
import Item from './Link'

const Header:React.FC = () => {

    return(

        <header id = "formPageHeader">
            <nav>
                <ul id = "headerContainer">
                    <Content name = "banner">
                        <h1> Wheater Project </h1>
                    </Content>
                    <Content name = "middleSeparator"/>
                    <Content name = "links">
                        <Item link = "/login" tooltip = "Fazer login" label = "Login" />
                        <Item link = "/" tooltip = "Criar conta" label = "Criar Conta" />
                    </Content>
                    <Content name = "rightSeparator" />
                </ul>
            </nav>
        </header>

    )

}

export default Header