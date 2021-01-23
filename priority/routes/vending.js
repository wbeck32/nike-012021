var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next) {
	res.render('index', { 
		title: 'Vending Machine',
		data:[],
		text: 'To run the vending machine demo in storybook, go to the root directory and run npm run vending'

	});
}
);

module.exports = router;
