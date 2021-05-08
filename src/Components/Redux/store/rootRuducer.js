import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from '../cartSlice/cartSlice'

export const rootReducer = combineReducers({
    cart: cartSlice.reducer,
})