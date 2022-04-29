import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AsyncGetPattern } from '../types/types'
import { Wheater } from '../types/wheaterApi'

export interface HomeState {
    apiData: AsyncGetPattern<Wheater>
}

const initialState: HomeState = {
    apiData: {
        data: null,
        loading: false,
        error: false
    },
}

export const homeSlice = createSlice({
    name: 'home',
    initialState, 
    reducers: {
        getWheaterPending: (state) => {state.apiData.loading = true},
        getWheaterSuccess: (state, action: PayloadAction<Wheater>) => {
            state.apiData.data = action.payload
            state.apiData.loading = false
            state.apiData.error = false
        },
        getWheaterError: (state) => {
            state.apiData.error = true 
            state.apiData.loading = false
            state.apiData.data = null
        },
    }
})

export const { getWheaterPending, getWheaterSuccess, getWheaterError } = homeSlice.actions
export default homeSlice.reducer