import { createSlice } from "@reduxjs/toolkit";
import {followOtherUser} from '../action/UserAction'

const initialState = {
    followerUser:[]
}

export const followerUser = createSlice({
    name:'followerUser',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            followOtherUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(followOtherUser.fulfilled,(state,action)=>{
            state.loading = false
            state.followerUser = action.payload
        })
        .addCase(followOtherUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default followerUser.reducer