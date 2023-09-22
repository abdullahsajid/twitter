import axios from 'axios'
import Cookies from 'universal-cookie'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {registerRequest,registerSuccess,registerFail} from '../reducer/registerUser'
import {editProfileReq,editProfileSuccess,editProfileFail} from '../reducer/editProfile'
import {tweetReq,tweetSuccess,tweetFail} from '../reducer/tweet'
import {getTweetReq,getTweetSuccess,getTweetFail} from '../reducer/getTweets'
import {likeReq,likeSuccess,likeFail} from '../reducer/likePost'


const cookie = new Cookies()

export const loginUser = createAsyncThunk('userLogin/login', async ({email,password}) => {
    try{
        const res = await axios.post('http://localhost:4000/api/login',{email,password},
            {
                headers:{
                    "Content-Type":'application/json'
                },
               
            }
        )
        cookie.set("token",res.data.token,{
            path:'/'
        })
    
        return res.data
    }catch(error){
        return error
    }
})

export const registerUser = createAsyncThunk('registerUser/register', async ({email,password}) => {
    try{
        const{data} = await axios.post('http://localhost:4000/api/register',{email,password},
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return data
    }catch(error){
        return error
    }
})

export const postEditProfile = (name,bio,bannerImg,Avatar) => async (dispatch) => {
    try{
        dispatch(editProfileReq())

        const {data} = await axios.post('http://localhost:4000/api/editProfile',{name,bio,bannerImg,Avatar},
        {
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials: true
        }
        )
        // console.log(data)
        dispatch(editProfileSuccess(data))

    }catch(error){
        dispatch(editProfileFail(error))
    }
}


export const logoutUser = createAsyncThunk('userLogout/logout', async () => {
    try{
        const {data} = await axios.get('http://localhost:4000/api/logout',
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return data
    }catch(error){
        return error
    }
})


export const getDetail = createAsyncThunk('user/profileDetails', async (id) => {
    try{
        const {data} = await axios.get(`http://localhost:4000/api/getUserDetail/${id}`,
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return data
    }catch(error){
        return error
    }
})


export const getProfile = createAsyncThunk('user/getUser', async () => {
    try{
        const {data} = await axios.get('http://localhost:4000/api/me',
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return data.user
    }catch(error){
        return error
    }
})

export const postTweet = (caption) => async (dispatch) => {
    try{
        dispatch(tweetReq())

        const {data} = await axios.post('http://localhost:4000/api/post',{caption},
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        dispatch(tweetSuccess(data))
    }catch(error){
        dispatch(tweetFail(error))
    }
}

export const gettingTweets = () => async (dispatch) => {
    try{
        dispatch(getTweetReq())

        const {data} = await axios.get('http://localhost:4000/api/getPosts',
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )

        dispatch(getTweetSuccess(data))
    }catch(error){
        dispatch(getTweetFail(error))
    }
}

export const postLike = (_id) => async (dispatch) => {
    try{
        dispatch(likeReq())
        const{data} = await axios.get(`http://localhost:4000/api/postLike/${_id}`,
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        dispatch(likeSuccess(data))
    }catch(error){
        dispatch(likeFail())
    }
}

export const postComment = createAsyncThunk('postComment/comment', async ({_id,comment}) => {
    try{
        const res = await axios.post(`http://localhost:4000/api/comment/${_id}`,{comment},
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return res.data

    }catch(error){
        return error
    }
}) 

export const getAllPost = createAsyncThunk('allPost/Post',async() => {
    try{
        const res = await axios.get(`http://localhost:4000/api/getAllPost`,
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return res.data
    }catch(error){
        return error
    }   
})

export const getAllUser = createAsyncThunk('allUser/User',async() => {
    try{
        const res = await axios.get('http://localhost:4000/api/getAllUser',
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return res.data
    }catch(error){
        return error
    }
})

export const bookmarkPost = createAsyncThunk('markPost/bookmarkPost', async({_id}) => {
    try{
        const {data} = await axios.get(`http://localhost:4000/api/postBookmark/${_id}`,
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return data
    }catch(error){
        return error.message
    }
})


export const getBookmark = createAsyncThunk('getBookmark/bookmark',async() =>{
    try{
        const res = await axios.get(`http://localhost:4000/api/getBookmark`,
            {
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials: true
            }
        )
        return res.data
    }catch(error){
        return error.message
    }
})