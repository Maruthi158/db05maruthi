var express = require('express');
const compartment_controlers= require('../controllers/compartment');
var router = express.Router();
/* GET costumes */
router.get('/', compartment_controlers.compartment_view_all_Page );

module.exports = router;
router.get('/detail', compartment_controlers.compartment_view_one_Page);
/* GET create compartment page */
router.get('/create', compartment_controlers.compartment_create_Page);
/* GET create update page */
router.get('/update', compartment_controlers.compartment_update_Page);
/* GET delete costume page */
router.get('/delete', compartment_controlers.compartment_delete_Page);
