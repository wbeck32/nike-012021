var express = require('express');
var router = express.Router();

// Retrieve the products
// Randomize the list
// Update products in database
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Replace products'});

});

module.exports = router;
