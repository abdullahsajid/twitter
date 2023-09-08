import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    likeAndUnlike:{}
}

export const likePost = createSlice({
    name:"likeAndUnlike",
    initialState,
    reducers:{
        likeReq:(state)=>{
            state.loading = true
        },
        likeSuccess:(state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        likeFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }        
    }
})

export const {likeReq,likeSuccess,likeFail} = likePost.actions
export default likePost.reducer
