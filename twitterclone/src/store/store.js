import {configureStore} from '@reduxjs/toolkit'
import userReducer  from '../reducer/User'
import profileReducer from '../reducer/ProfileDetails'
import loginUserReducer from '../reducer/loginUser'
import registerUserReducer from '../reducer/registerUser'
import userLogoutReducer from '../reducer/userLogout'
import editProfileReducer from '../reducer/editProfile'
import tweetsReducer from '../reducer/tweet'
import getTweetReducer from '../reducer/getTweets'
import likePostReducer from '../reducer/likePost'
import postCommentReducer from '../reducer/postComment'
import allPostReducer from '../reducer/allPost'
import allUserReducer from '../reducer/allUser'

export const store = configureStore({
    reducer:{
        user : userReducer,
        profile: profileReducer,
        userLogin: loginUserReducer,
        registerUser: registerUserReducer,
        userLogout: userLogoutReducer,
        editProfile: editProfileReducer,
        tweet: tweetsReducer,
        getTweet: getTweetReducer,
        likeAndUnlike: likePostReducer,
        postComment: postCommentReducer,
        allPost: allPostReducer,
        allUser:allUserReducer
    }   
})

