import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Theme, ThemeContext } from '../../context/ThemeContext'

import PageRender from '../../components/PageRender'
import Cadastro from '../../pages/Cadastro'
import Login from '../../pages/Login'

const LoginRoute: React.FC = () => {

    const [prefers] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
    const [storage] = useState(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(storage ? storage === 'dark-mode' ? Theme.Dark : Theme.Light : prefers.matches ? Theme.Dark : Theme.Light)

    return(
        
        <ThemeContext.Provider value = {{ theme, setTheme }}>
            <Router>
                <Switch>

                    <Route
                        exact path = "/"
                        render = {props => (
                            <PageRender {...props} pageType = "form" name = "Cadastro" title = "Cadastro" theme1 = {theme} component = {<Cadastro />} />
                        )}
                    />
                    <Route
                        exact path = "/login"
                        render = {props => (
                            <PageRender {...props} pageType = "form" name = "Login" title = "Login" theme1 = {theme} component = {<Login />} />
                        )}
                    />

                </Switch>
            </Router>
        </ThemeContext.Provider>

    )

}

export default LoginRoute