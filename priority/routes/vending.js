var express = require('express');
var router = express.Router();
const {retrieveProducts} = require('../utils/localStorage')

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// Get all products in the db
router.get('/', function(req, res,next) {
	const tmp = retrieveProducts()
	console.log('tmp:', tmp);
	res.render('index', { title: 'List products',data:{1:'one',2:'two'}});


	// console.log('res:', res);
	// console.log('list')
}
);

module.exports = router;
