const express = require('express');
const dummylink = require('../../controller/commentController');
const router = express.Router();

router.get('/dummy' , dummylink);


module.exports = router;