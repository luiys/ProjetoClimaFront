import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageRender from '../../components/PageRender'

import { Theme, ThemeContext } from '../../context/ThemeContext'

import Clima from '../../pages/Clima'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'

const AppRoute: React.FC = () => {

    const [storage] = useState(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(storage === 'dark-mode' ? Theme.Dark : Theme.Light)

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
                        exact path = "/clima"
                        render = {props => (
                            <PageRender {...props} pageType = "default" name = "Clima" title = "Clima" theme1 = {theme} component = {<Clima />} />
                        )}
                    />
                    <Route
                        exact path = "*"
                        render = {props => (
                            <PageRender {...props} pageType = "default" name = "NotFound" title = "404" theme1 = {theme} component = {<NotFound />} />
                        )}
                    />

                </Switch>
            </Router>
        </ThemeContext.Provider>

    )

}

export default AppRoute