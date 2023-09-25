import { createSlice } from "@reduxjs/toolkit";
import {followUser} from '../action/UserAction'

const initialState = {
    followUser:[]
}

export const followingUser = createSlice({
    name:'followUser',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            followUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            followUser.fulfilled,(state,action)=>{
            state.loading = false
            state.followUser = action.payload
        })
        .addCase(
            followUser.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })

    }
})

export default followingUser.reducer
