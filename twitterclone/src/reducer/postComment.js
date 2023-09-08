import { createSlice } from "@reduxjs/toolkit";
import {postComment} from '../action/UserAction'
const initialState = {
    postComment:{}
}
export const commentSlice = createSlice({
    name:'postComment',
    initialState,
    extraReducers:builder=>{
        builder
        .addCase(
            postComment.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            postComment.fulfilled,(state,action)=>{
                state.loading = false
                state.postComment = action.payload
            }
        )
        .addCase(
            postComment.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})
export default commentSlice.reducer
