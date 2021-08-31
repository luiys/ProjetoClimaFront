import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Clima from '../../pages/Clima';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const AppRoute: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/clima">
                    <Clima />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoute;