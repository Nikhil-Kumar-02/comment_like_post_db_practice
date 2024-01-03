const Post = require('../models/post');

const addPost = async (req,res) => {
    try {
        const data = {
            "title" : req.body.title,
            "body" : req.body.body
        }
        console.log('this is the input created' , data);
        const result = await Post.create(data);
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

const getPostByid = async (req,res) => {
    try {
        const postid = req.params.postid;
        const result = await Post.findById(postid);
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

const getAllPost = async (req,res) => {
    try {
        const result = await Post.find({}).populate('likes');
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

const updatePost = async (req,res) => {
    try {
        const postid = req.params.postid;
        const {title , body} = req.body;
        console.log(postid , {title , body});
        const result = await Post.findByIdAndUpdate({_id : postid} , {title,body} , {new : true});
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
    addPost,
    getAllPost,
    getPostByid,
    updatePost
};