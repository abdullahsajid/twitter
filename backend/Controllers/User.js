const users = require('../model/userModel')

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