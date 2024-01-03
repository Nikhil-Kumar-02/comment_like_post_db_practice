const Comment = require('../models/comment');
const Post = require('../models/post');

const addComment = async (req,res) => {
    try {
            console.log(req.body);
            const user =  req.body.user;
            const body = req.body.body;
            const postid = req.body.postid;

            //find the post on which you want to comment on
            //then add this comment to that post
            const targetPost = await Post.findById(postid);
            console.log('target post',targetPost);
            const result = await Comment.create({user , body , post : postid});
            console.log('created comment',result);
            targetPost.comments.push(result._id);
            const result1 = await targetPost.save();            
            console.log('final result after adding to the comments array' , result);
        res.status(200).json({
            message : 'data inserted sucessfully into db',
            data : result1
        })
    } catch (error) {
        res.status(400).json({
            message : "data not added to db",
            description : error
        })
    }
}

const getCommentByid = async (req,res) => {
    try {
        const commentid = req.params.commentid;
        const result = await Comment.findById(commentid);
        res.status(200).json({
            message : 'data found sucessfully in db',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            message : "data not fetched from db",
            description : error
        })
    }
}

const getAllComment = async (req,res) => {
    try {
        const result = await Comment.find({});
        res.status(200).json({
            message : 'data fetched from db',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            message : "data not fetched from db",
            description : error
        })
    }
}

const updateComment = async (req,res) => {
    try {
        const commentid = req.params.commentid;
        const {user , body} = req.body;
        console.log(commentid , {user , body});
        const result = await Comment.findByIdAndUpdate({_id : commentid} , {user,body} , {new : true});
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
    addComment,
    getAllComment,
    getCommentByid,
    updateComment
};