const Users = require('../model/userModel')
const jwt = require('jsonwebtoken')
const cookies = require("cookie-parser");
exports.auth = async (req,res,next) => {
    try{
        const { token } = req.cookies;
        // const token = await req.headers.authorization.split(' ')[1]
        // console.log(token)
        if(!token){
            return res.status(401).json({
                message:"please login!",
                messageError:Error
            })
        }
        const decode = await jwt.verify(token,process.env.JWT_TOKEN)
        req.user = await Users.findById(decode._id)
        next()
    }catch(err){
        res.status(401).json({
            success:false,
            message:err.message,
        })
    }
}


// const token = await req.headers.authorization.split(' ')[1]
//         console.log(token)
//         const verify = await jwt.verify(token,'RANDOM-TOKEN')
//         const user = await verify
//         req.user = user
//         // req.user = await users.findById(user._id)                                                                         
//         next()