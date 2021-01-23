var express = require('express');
var router = express.Router();

// Retrieve the products
// Randomize products
// Update products in database
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Randomize products'});

});

module.exports = router;
