var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Change Product Priority',data:{1:'one',2:'two'}});

});
module.exports = router;
