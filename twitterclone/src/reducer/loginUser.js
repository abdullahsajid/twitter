import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin:{}
}

export const loginUser = createSlice({
    name:'userLogin',
    initialState,
    reducers:{
        loginRequest:(state) => {
            state.loading = true
        },
        loginSuccess:(state,action) => {
            state.loading = false
            state.user = action.payload
        },
        loginFail:(state,action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export const {loginRequest,loginSuccess,loginFail} = loginUser.actions
export default loginUser.reducer