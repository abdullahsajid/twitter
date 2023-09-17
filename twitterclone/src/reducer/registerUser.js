import { createSlice } from "@reduxjs/toolkit";
import {registerUser} from '../action/UserAction'
const initialState = {
    registerUser:{}
}

export const registeruser = createSlice({
    name:'registerUser',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            registerUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            state.registerUser = action.payload
        })
        .addCase(
            registerUser.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default registeruser.reducer