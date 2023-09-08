import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    editProfile:{}
}
export const editProfileSlice = createSlice({
    name:'editProfile',
    initialState,
    reducers:{
        editProfileReq:(state)=> {
            state.loading = true
        },
        editProfileSuccess:(state,action) => {
            state.loading = false
            state.user = action.payload
        },
        editProfileFail:(state,action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {editProfileReq,editProfileSuccess,editProfileFail} = editProfileSlice.actions
export default editProfileSlice.reducer
