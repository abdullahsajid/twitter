import {configureStore} from '@reduxjs/toolkit'
import userReducer  from '../reducer/User'
import profileReducer from '../reducer/ProfileDetails'
import userLoginReducer from '../reducer/loginUser'
import registerUserReducer from '../reducer/registerUser'
import userLogoutReducer from '../reducer/userLogout'
import editProfileReducer from '../reducer/editProfile'
import tweetsReducer from '../reducer/tweet'
import getTweetReducer from '../reducer/getTweets'
import likePostReducer from '../reducer/likePost'
import postCommentReducer from '../reducer/postComment'
import allPostReducer from '../reducer/allPost'
import allUserReducer from '../reducer/allUser'
import markPostReducer from '../reducer/bookmarkPost'
import getBookmarkReducer from '../reducer/getBookmark'
import allUserProfileReducer from '../reducer/allProfiles'
import followUserReducer from '../reducer/following'
import followerUserReducer from '../reducer/follower'
import getLatestPostReducer from '../reducer/latestPost'

export const store = configureStore({
    reducer:{
        user : userReducer,
        profile: profileReducer,
        userLogin: userLoginReducer,
        registerUser: registerUserReducer,
        userLogout: userLogoutReducer,
        editProfile: editProfileReducer,
        tweet: tweetsReducer,
        getTweet: getTweetReducer,
        likeAndUnlike: likePostReducer,
        postComment: postCommentReducer,
        allPost: allPostReducer,
        allUser:allUserReducer,
        markPost : markPostReducer,
        getBookmark: getBookmarkReducer,
        allUserProfile: allUserProfileReducer,
        followUser: followUserReducer,
        followerUser:followerUserReducer,
        getLatestPost:getLatestPostReducer
    },
    devTools:false  
})



