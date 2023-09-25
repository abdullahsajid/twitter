import { createSlice } from "@reduxjs/toolkit";
import {getAllProfile} from '../action/UserAction'
const initialState = {
    allUserProfile:[]
}
export const allUserProfile = createSlice({
    name:'allUserProfile',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getAllProfile.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            getAllProfile.fulfilled,(state,action)=>{
            state.loading = false
            state.allUserProfile = action.payload
        })
        .addCase(
            getAllProfile.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default allUserProfile.reducer

