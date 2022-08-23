import { createAction, createReducer } from "@reduxjs/toolkit";

const product = {
  
}

export const setProduct = createAction('SET_PRODUCT')
const productReducer = createReducer(product, {
    [setProduct]: (state, action) => action.payload
})

export default productReducer                               