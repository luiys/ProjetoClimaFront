import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {reactLocalStorage as ls} from 'reactjs-localstorage'

export interface User {
    id: number,
    nome: string,
    email: string,
    senha: string,
}

export interface IAuthState {
    user: null | User
    isLogged: boolean
}

const initialState: IAuthState = {
    user: null,
    isLogged: false
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isLogged = true
            ls.setObject('user', action.payload)
        },
        logOut: () => initialState
    }
})

export const { logIn, logOut } = authReducer.actions;
export default authReducer.reducer;
