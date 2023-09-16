import { createSlice } from "@reduxjs/toolkit";
import {getBookmark} from '../action/UserAction'
const initialState = {
    getBookmark:{}
}

export const getBookMark = createSlice({
    name:'getBookmark',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getBookmark.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            getBookmark.fulfilled,(state,action)=>{
                state.loading = false
                state.getBookmark = action.payload
        })
        .addCase(
            getBookmark.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default getBookMark.reducer