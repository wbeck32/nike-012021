var express = require('express');
var router = express.Router();
const {retrieveProducts} = require('../utils/localStorage')

// Get all products in the db
router.get('/', function(req, res,next) {
	const tmp = retrieveProducts()
	console.log('tmp:', tmp);
	res.render('index', { topicTitle: 'List products',data:[],text:'Retrieves all the products in the database.'});
}
);

module.exports = router;
