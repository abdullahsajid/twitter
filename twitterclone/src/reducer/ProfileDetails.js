import { createSlice } from "@reduxjs/toolkit";
import {getDetail} from '../action/UserAction'
const initialState = {
    profile:[]
}

export const details = createSlice({
    name:'profile',
    initialState,
    extraReducers:builder =>{
        builder
        .addCase(
            getDetail.pending,(state)=>{
                state.loading= true
            })
        .addCase(getDetail.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload
        })
        .addCase(getDetail.rejected,(state,action)=> {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {getUserProfileReq,getUserProfileSuccess,getUserProfileFail} = details.actions
export default details.reducer
