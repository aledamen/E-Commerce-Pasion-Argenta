import {configureStore, } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import productReducer from './product'
import userReducer from './user'


const store = configureStore({
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        product: productReducer,
            
    }
})

export default store