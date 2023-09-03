const users = require('../model/userModel')
const userPost = require('../model/PostModel')

exports.userPost = async (req,res) => {
    try{
        const post = {
            owner:req.user._id,
            caption : req.body.caption,
            postImg : {
                public_id : 'public_id',
                url : 'img_url'
            },
        }

        const addPost = await userPost.create(post)
        const user = await users.findById(req.user._id)
        user.posts.push(addPost._id)
        await user.save()

        res.status(201).json({
            success:true,
            message:'post created!'
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    
}

exports.getUserPost = async (req,res) => {
    try{
        let posted = []
        const user = await users.findById(req.user._id)

        for(let i=0; i<user.posts.length; i++){
            const allPosts = await userPost.findById(user.posts[i])
            posted.push(allPosts)
        }
        if(posted == null){
            return res.status(400).json({
                message:'no post!'
            })
        }
        res.status(201).json({
            success:true,
            posted
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}


exports.postLike = async (req,res) => {
    try{
        const addLike = await userPost.findById(req.params._id)
        if(addLike.likes.includes(req.user._id)){

            const index =  addLike.likes.indexOf(req.user._id)
            addLike.likes.splice(index,1)
            await addLike.save()

            return res.status(200).json({
                success:true,
                message:'post Unlike!'
            })
        }else{
            addLike.likes.push(req.user._id)
            await addLike.save()
            res.status(201).json({
                success:true,
                message:'post like!'
            })
        }
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}


exports.postComment = async (req,res) => {
    try{
        const post = await userPost.findById(req.params._id)
        post.comments.push({
            user:req.user._id,
            comment:req.body.comment
        })
        await post.save()
        res.status(201).json({
            success:true,
            message:"comment added!"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}
