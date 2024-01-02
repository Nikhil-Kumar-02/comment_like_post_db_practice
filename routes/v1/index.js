const express = require('express');
const addComment = require('../../controller/commentController');
const router = express.Router();

router.post('/comment' , addComment);


module.exports = router;