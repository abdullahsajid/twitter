import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userLogout:{}
}
export const userLogout = createSlice({
    name:'userLogout',
    initialState,
    reducers:{
        logoutReq:(state)=>{
            state.loading = true
        },
        logoutSuccess:(state,action) => {
            state.loading = true
            state.user = null
        },
        logoutFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {logoutReq,logoutSuccess,logoutFail} = userLogout.actions
export default userLogout.reducer

