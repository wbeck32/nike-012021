var express = require('express');
var router = express.Router();

// randomize products
router.get('/', function(req, res, next) {
  res.send('random');
});

module.exports = router;
