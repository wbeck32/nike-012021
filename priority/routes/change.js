var express = require('express');
var router = express.Router();

// Retrieve the products
// Choose a product
// Update that products' priority
// Shift the other products' priorities accordingly
// Update products in database
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Change Product Priority',data:[]});

});
module.exports = router;
