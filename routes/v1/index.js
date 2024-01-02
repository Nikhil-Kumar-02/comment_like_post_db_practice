const express = require('express');
const {addComment , getAllComment , getCommentByid , updateComment} = require('../../controller/commentController');
const router = express.Router();

router.post('/comment' , addComment);
router.get('/getComments' , getAllComment);
router.get('/getComment/:commentid' , getCommentByid);
router.put('/updateComment/:commentid' , updateComment);

module.exports = router;