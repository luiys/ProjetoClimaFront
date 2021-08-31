import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import cadastroReducer from './reducers/cadastroReducer'
import homeReducer from './reducers/homeReducer'

const store = configureStore({
    reducer: {
        cadastro: cadastroReducer,
        auth: authReducer,
        home: homeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store