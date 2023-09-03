const express = require('express')
const {userPost} = require('../Controllers/post')
const {getUserPost} = require('../Controllers/post')
const {postLike} = require('../Controllers/post')
const {postComment} = require('../Controllers/post')
const {auth} = require('../middleware/auth')
const postRoute = express.Router()

postRoute.route('/post').post(auth,userPost)
postRoute.route('/getPosts').get(auth,getUserPost)
postRoute.route('/postLike/:_id').get(auth,postLike)
postRoute.route('/comment/:_id').post(auth,postComment)

module.exports = postRoute

