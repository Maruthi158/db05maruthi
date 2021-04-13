var express = require('express');
const compartment_controlers= require('../controllers/compartment');
var router = express.Router();
/* GET costumes */
router.get('/', compartment_controlers.compartment_view_all_Page );

module.exports = router;
router.get('/detail', compartment_controlers.compartment_view_one_Page);