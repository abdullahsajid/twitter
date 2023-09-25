import { createSlice } from "@reduxjs/toolkit";
import {getLatestPost} from '../action/UserAction'

const initialState = {
    getLatestPost: []
}

export const getLatest = createSlice({
    name:'getLatestPost',
    initialState,
    extraReducers:builder=>{
        builder.addCase(getLatestPost.pending,(state)=>{
            state.loading = true
        })
        .addCase(getLatestPost.fulfilled,(state,action)=>{
            state.loading = false
            state.getLatestPost = action.payload
        })
        .addCase(getLatestPost.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default getLatest.reducer