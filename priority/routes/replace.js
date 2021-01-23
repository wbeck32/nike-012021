var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Replace products',data:{1:'one',2:'two'}});

});

module.exports = router;
