import { createAction, createReducer } from "@reduxjs/toolkit"

export const setDataCheckout = createAction('SET_DATA_CHECKOUT')

const checkOutReducer = createReducer({}, {
[setDataCheckout]: (state,action)=> action.payload
})

export default checkOutReducer