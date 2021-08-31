import React, { useEffect } from 'react';
import AppRoute from './AppRoute';
import LoginRoute from './LoginRoute';
import { useAppSelector } from '../redux/hooks';
import { reactLocalStorage as ls } from 'reactjs-localstorage'
import { useDispatch } from 'react-redux';
import { logIn, User } from '../redux/reducers/authReducer';

const MainRoute: React.FC = () => {

    const { isLogged } = useAppSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = ls.getObject('user') as User;
        if (!!user) dispatch(logIn(user))
    }, [dispatch])

    return isLogged ? <AppRoute /> : <LoginRoute />;
}

export default MainRoute;