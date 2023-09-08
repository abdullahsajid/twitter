import { createSlice } from "@reduxjs/toolkit";
import {getAllUser} from '../action/UserAction'
const initialState ={
    allUser: []
}

export const allUserSlice = createSlice({
    name:'allUser',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getAllUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            getAllUser.fulfilled,(state,action)=>{
                state.loading = false
                state.allUser = action.payload
        })
        .addCase(
            getAllUser.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default allUserSlice.reducer