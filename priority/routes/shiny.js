var express = require('express');
var router = express.Router();
const findShiny = require('../public/javascripts/findShiny')

// Load shiny page
router.get('/', function(req, res, next) {
	res.render('index', { topicTitle: 'Shiny Numbers',shiny:'shiny',shinyArray:[]});
});

// Generate shiny array
router.post('/',async (req,res)=>{
	const num = req.body.num
const shinyArray = await findShiny(Number(num))
	res.render('index', { topicTitle: 'Shiny Numbers',shiny:true,shinyArray});
})

module.exports = router;






