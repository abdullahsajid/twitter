import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    registerUser:{}
}

export const registerUser = createSlice({
    name:'registerUser',
    initialState,
    reducers:{
        registerRequest:(state) => {
            state.loading = true
        },
        registerSuccess:(state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        registerFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {registerRequest,registerSuccess,registerFail} = registerUser.actions
export default registerUser.reducer