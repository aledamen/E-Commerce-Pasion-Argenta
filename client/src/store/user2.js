import { createAction, createReducer } from "@reduxjs/toolkit";

const user = {
  
}

export const setUser = createAction('SET_USER')

const userReducer = createReducer(user, {
    [setUser]: (state, action) => action.payload
})

export default userReducer

// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// let dispatch = useDispatch();

//dispatch(setUser({}))
//const user = useSelector((state) => state.user);