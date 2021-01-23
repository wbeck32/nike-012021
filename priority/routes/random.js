var express = require('express');
var router = express.Router();

// randomize products
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Randomize products',data:{1:'one',2:'two'}});

});

module.exports = router;
