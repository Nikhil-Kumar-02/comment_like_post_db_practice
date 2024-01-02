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

module.exports = addComment;