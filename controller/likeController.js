const Like = require('../models/like');
const Post = require('../models/post')

const addLike = async (req,res) => {
    try {
        const user = req.body.user;
        const postid = req.body.postid
        
        //add this data to the like model and then add the generated like id to the post model
        //so as to refer it for future
        const result1 = await Like.create({user , post : postid});
        const targetPost = await Post.findById(postid);
        console.log('result1' , result1);
        console.log('targetPost' , targetPost);
        targetPost.likes.push(result1._id);
        const result2 = await targetPost.save();
        //above will give back the updated changes in the post model
        console.log('result2' , result2);
        res.status(200).json({
            message : 'data inserted sucessfully into db',
            data : {result1 , result2}
        })
    } catch (error) {
        res.status(400).json({
            message : "data not added to db",
            description : error
        })
    }
}

const removeLike = async (req,res) => {
    try {
        //i will get the postid from which recieved like id has to be removed
        const commentid = req.params.commentid;
        const {user , body} = req.body;
        console.log(commentid , {user , body});
        const result = await Like.findByIdAndUpdate({_id : commentid} , {user,body} , {new : true});
        console.log(result)
        res.status(200).json({
            message : 'data updated in db',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            message : "data not fetched from db",
            description : error
        })
    }
}


module.exports = {
    addLike,
    removeLike
};