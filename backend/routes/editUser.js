const express = require('express')
const {editProfile} = require('../Controllers/editProfile')
const {getProfile} = require('../Controllers/editProfile')
const {Profile} = require('../Controllers/User')
const {auth} = require('../middleware/auth')
const editUserRoute = express.Router()

editUserRoute.route('/editProfile').post(auth,editProfile)

editUserRoute.route('/getUserDetail/:_id').get(auth,getProfile)

editUserRoute.route('/me').get(auth,Profile)

module.exports = editUserRoute

