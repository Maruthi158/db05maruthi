var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('compartment', { title: 'search results compartment' });
});

module.exports = router;
