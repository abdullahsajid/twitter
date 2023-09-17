import { createSlice } from "@reduxjs/toolkit";
import {loginUser} from '../action/UserAction'
const initialState = {
    userLogin:{}
}

export const loginuser = createSlice({
    name:'userLogin',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            loginUser.pending,(state) => {
                state.loading = true
        })
        .addCase(
            loginUser.fulfilled,(state,action) => {
            state.loading = false
            state.userLogin = action.payload
        })
        .addCase(
            loginUser.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default loginuser.reducer