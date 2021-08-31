import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import cadastroReducer from './reducers/cadastroReducer'

const store = configureStore({
    reducer: {
        cadastro: cadastroReducer,
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store