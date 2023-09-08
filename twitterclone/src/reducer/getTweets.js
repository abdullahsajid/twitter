import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    getTweet:{}
}

export const tweet = createSlice({
    name:"getTweet",
    initialState,
    reducers:{
        getTweetReq:(state)=>{
            state.loading = true
        },
        getTweetSuccess:(state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        getTweetFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {getTweetReq,getTweetFail,getTweetSuccess} = tweet.actions
export default tweet.reducer