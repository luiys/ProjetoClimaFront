import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Cadastro from '../../pages/Cadastro';
import Login from '../../pages/Login';


const LoginRoute: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Cadastro />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default LoginRoute;