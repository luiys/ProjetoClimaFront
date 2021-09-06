import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Theme, ThemeContext } from '../../context/ThemeContext'

import PageRender from '../../components/PageRender'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'

const AppRoute: React.FC = () => {

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
                            <PageRender {...props} pageType = "default" name = "Home" title = "Home" theme1 = {theme} component = {<Home />} />
                        )}
                    />
                    <Route
                        exact path = "*"
                        render = {props => (
                            <PageRender {...props} pageType = "error" name = "NotFound" title = "404" theme1 = {theme} component = {<NotFound />} />
                        )}
                    />

                </Switch>
            </Router>
        </ThemeContext.Provider>

    )

}

export default AppRoute