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