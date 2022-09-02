import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import checkOutReducer from './checkout'
import productReducer from './product'
import userReducer from './user'

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        dataCheckOut: checkOutReducer,
    },
})

export default store
