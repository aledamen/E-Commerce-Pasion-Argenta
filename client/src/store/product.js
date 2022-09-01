import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sendCreateProduct = createAsyncThunk('CREATE_PRODUCT', async (data) => {
      return await axios.post('/api/products/create', data)
})

export const getProducts = createAsyncThunk ("GET_PRODUCT",async ()=>{
    return await axios.get("/api/products/all").then(r=>r.data)
})

export const searchProduct = createAsyncThunk ("GET_PRODUCT_NAME",async (name)=>{
    return await axios.get(`/api/products/search/${name}`).then(r=>r.data)
})

export const sendEditProduct = createAsyncThunk ("EDIT_PRODUCT",async (product)=>{
    return await axios.put(`/api/products/modify`,product).then(r=>r.data)
})

export const deleteProduct = createAsyncThunk (`DELETE_PRODUCT`,(id)=>{
    axios.delete(`/api/products/delete/${id}`)
    .then(res=>res.data)
})

export const setProduct = createAction('SET_PRODUCT')

const productReducer = createReducer({}, {
    [setProduct]: (state, action) => action.payload,
    [getProducts.fulfilled]:(state,action) => action.payload,
    [searchProduct.fulfilled]:(state,action) => action.payload,
    [sendCreateProduct.fulfilled]:(state,action) => action.payload,
    [sendEditProduct.fulfilled]:(state,action) => action.payload,
    [deleteProduct.fulfilled]:(state,action) => action.payload
})

export default productReducer                               