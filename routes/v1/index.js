const express = require('express');
const {addComment , getAllComment , getCommentByid , updateComment} = require('../../controller/commentController');
const { addPost, getAllPost, getPostByid, updatePost } = require('../../controller/postController');
const router = express.Router();

router.post('/comment' , addComment);
router.get('/getComments' , getAllComment);
router.get('/getComment/:commentid' , getCommentByid);
router.put('/updateComment/:commentid' , updateComment);

router.post('/post' , addPost);
router.get('/getPosts' , getAllPost);
router.get('/getPost/:postid' , getPostByid);
router.put('/updatePost/:postid' , updatePost);
module.exports = router;