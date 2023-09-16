const express = require('express')
const {userPost,postBookMark,getUserPost,postLike,postComment,getBookMark} = require('../Controllers/post')
const {auth} = require('../middleware/auth')
const postRoute = express.Router()

postRoute.route('/post').post(auth,userPost)
postRoute.route('/getPosts').get(auth,getUserPost)
postRoute.route('/postLike/:_id').get(auth,postLike)
postRoute.route('/comment/:_id').post(auth,postComment)
postRoute.route('/postBookmark/:_id').get(auth,postBookMark)
postRoute.route('/getBookmark').get(auth,getBookMark)

module.exports = postRoute

