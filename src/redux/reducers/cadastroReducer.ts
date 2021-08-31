import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface CadastroState {
    redirect: boolean
}

const initialState: CadastroState = {
    redirect: false,
}

export const cadastroSlice = createSlice({
    name: 'cadastro',
    initialState, 
    reducers: {
        redirectToLogin: (state, action: PayloadAction<boolean>) => {state.redirect = action.payload},
    }
})

export const { redirectToLogin } = cadastroSlice.actions
export default cadastroSlice.reducer