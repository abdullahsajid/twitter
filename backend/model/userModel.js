const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:[true,'email already exists']
    },
    password:{
        type:String,
        required:[true,'Please provide a password!'],
        unique:false
    },
    profileDetails:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userProfile'
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'posts'
        },
    ]
})
UserSchema.pre('save', function (next) {
    if (!this.posts) {
      this.posts = [];
    }
    next();
});
module.exports = mongoose.model("users",UserSchema)
