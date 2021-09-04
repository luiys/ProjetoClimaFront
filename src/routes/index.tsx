import React, { useEffect } from 'react'
import { reactLocalStorage as ls } from 'reactjs-localstorage'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../redux/hooks'
import { logIn, User } from '../redux/reducers/authReducer'

import '../styles/base/App.scss'
import '../styles/base/Layout.scss'

import AppRoute from './AppRoute'
import LoginRoute from './LoginRoute'

const MainRoute: React.FC = () => {

    const { isLogged } = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const user = ls.getObject('user') as User
        if (!!user && !!user.id) dispatch(logIn(user))
    }, [dispatch])

    return isLogged ? <AppRoute /> : <LoginRoute />

}

export default MainRoute