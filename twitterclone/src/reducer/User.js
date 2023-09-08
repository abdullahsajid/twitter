import { createSlice } from "@reduxjs/toolkit";
import {getProfile} from '../action/UserAction'
const initialState = {
    user:{}
}
export const Userslice = createSlice({
        name:'user',
        initialState,
        extraReducers:builder=>{
            builder
            .addCase(
                getProfile.pending,(state)=>{
                state.loading = true
            })
            .addCase(
                getProfile.fulfilled,(state,action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(getProfile.rejected,(state,action) => {
                state.loading = false
                state.error = action.payload
            })
        }
    }
)

export const {profileReq,profileSuccess,profileFail} = Userslice.actions
export default Userslice.reducer











