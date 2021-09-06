import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageRender from '../../components/PageRender'
import { Theme, ThemeContext } from '../../context/ThemeContext'
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