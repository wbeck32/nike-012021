var express = require('express');
var router = express.Router();
const {initializeProducts} = require('../utils/localStorage')

let products = [
	{
		style:'style',
		color:'color',
		size:'size',
		priority:0
	}
]

// Initialize database if it does not exist
// GET homepage
router.get('/', function(req, res, next) {
	// initializeProducts(products)
	res.render('index', { title: 'Manage product priorities' });
});

module.exports = router;
