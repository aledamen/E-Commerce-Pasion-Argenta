import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"
// const user = {
  
// }

// export const setUser = createAction('SET_USER', (data) => {
//     return data
// })
export const sendMe = createAsyncThunk('ME', async () => {
    const auth = await axios.get('/api/auth/me')
    // console.log("AUTH", auth)
    const res = await axios.get(`/api/users/${auth.data._id}`)
    return res.data
})

export const signUpRequest = createAsyncThunk('SIGNUP', async (data) => {
    const res = await axios.post('/api/auth/signup', data)
    return res.data
})

export const LogInRequest = createAsyncThunk('LOGIN', async (data) => {
    const res = await axios.post('/api/auth/login', data)
    return res.data
})
export const LogOutRequest = createAsyncThunk('LOGOUT', async () => {
    const res = await axios.post('/api/auth/logout')
    return res.data
}) 

const userReducer = createReducer([], {
    // [setUser]: (state, action) => action.payload,
    [sendMe.fulfilled]: (state, action) => action.payload,
    [signUpRequest.fulfilled]: (state, action) => action.payload,
    [LogInRequest.fulfilled]: (state, action) => action.payload,
    [LogOutRequest.fulfilled]: (state, action) => action.payload,

})

export default userReducer

// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// let dispatch = useDispatch();

//dispatch(setUser({}))
//const user = useSelector((state) => state.user);