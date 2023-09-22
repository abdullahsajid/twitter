const users = require('../model/userModel')
const userProfile = require('../model/userProfile')
exports.Profile = async (req,res) => {
    try{
        const user = await users.findById(req.user._id)

        res.status(200).json({
            success:true,
            user
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.allPost = async (req,res) => {
    try{
        const allpost = await userProfile.find({})
        res.status(200).json({
            success:true,
            allpost
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

exports.allUser = async (req,res) => {
    try{
        const alluser = await users.find({})
        res.status(200).json({
            success:true,
            alluser
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.followers = async (req,res) => {
    try{
        const user = await users.findById(req.user._id)
        const userFollower = await users.findById(req.params._id)
        if(user.followers.includes(userFollower._id)){
            const index = await user.followers.indexOf(userFollower._id)
            user.followers.splice(index,1)
            await user.save()
            
            return res.status(200).json({
                success:true,
                message:'user unfollower'
            })
        }else{
            user.followers.push(userFollower._id)
            await user.save()

            return res.status(200).json({
                success:true,
                message:'follower'
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.following = async (req,res) => {
    try{
        const user = await users.findById(req.user._id)
        const followingUser = await users.findById(req.params._id)

        if(user.following.includes(followingUser._id)){
            const index = await user.following.indexOf(followingUser._id)
            user.following.splice(index,1)
            await user.save()

            return res.status(200).json({
                success:true,
                message:'you unfollow someone!'
            })
        }else{
            user.following.push(followingUser._id)
            await user.save()

            return res.status(200).json({
                success:true,
                message:'you follow someone!'
            })
        }
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}