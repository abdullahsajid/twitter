import { createSlice } from "@reduxjs/toolkit";
import {getAllPost} from '../action/UserAction'
const initialState = {
    allPost:[]
}

export const allPostSlice = createSlice({
    name:'allPost',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getAllPost.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            getAllPost.fulfilled,(state,action)=>{
                state.loading = false
                state.allPost = action.payload
        })
        .addCase(
            getAllPost.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default allPostSlice.reducer