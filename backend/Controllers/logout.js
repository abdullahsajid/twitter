exports.logout = async (req,res) => {
    try{
        res.status(200)
        .cookie('token',null,{httpOnly:true})
        .json({
            success:true,
            message:"logout!"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}