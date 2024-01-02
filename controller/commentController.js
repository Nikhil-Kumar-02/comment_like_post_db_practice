const Comment = require('../models/comment');

const addComment = async (req,res) => {
    try {
        const data = {
            "user" : req.body.user,
            "body" : req.body.body
        }
        console.log('this is the input created' , data);
        const result = await Comment.create(data);
        res.status(200).json({
            message : 'data inserted sucessfully into db',
            data : result
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