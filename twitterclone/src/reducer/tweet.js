import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tweet:{}
}

export const tweets = createSlice({
    name:'tweet',
    initialState,
    reducers:{
        tweetReq:(state)=>{
            state.loading = true
        },
        tweetSuccess:(state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        tweetFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {tweetReq,tweetSuccess,tweetFail} = tweets.actions
export default tweets.reducer

