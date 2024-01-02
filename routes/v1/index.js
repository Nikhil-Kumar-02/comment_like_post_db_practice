const express = require('express');
const {addComment , getAllComment , getCommentByid} = require('../../controller/commentController');
const router = express.Router();

router.post('/comment' , addComment);
router.get('/getComments' , getAllComment);
router.get('/getComment/:commentid' , getCommentByid);

module.exports = router;