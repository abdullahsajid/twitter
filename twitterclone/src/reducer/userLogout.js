import { createSlice } from "@reduxjs/toolkit";
import {logoutUser} from '../action/UserAction'
const initialState = {
    userLogout:{}
}
export const userLogout = createSlice({
    name:'userLogout',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            logoutUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            logoutUser.fulfilled,(state,action)=>{
                state.loading = false
                state.userLogout = action.payload
        })
        .addCase(
            logoutUser.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default userLogout.reducer

