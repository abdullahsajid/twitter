import { createSlice } from "@reduxjs/toolkit";
import {bookmarkPost} from '../action/UserAction'
const initialState = {
    markPost:{}
}
export const bookmarkPosts = createSlice({
    name:"markPost",
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            bookmarkPost.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            bookmarkPost.fulfilled,(state,action)=>{
                state.loading = false
                state.markPost = action.payload
        })
        .addCase(
            bookmarkPost.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default bookmarkPosts.reducer