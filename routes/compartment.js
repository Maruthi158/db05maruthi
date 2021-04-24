var express = require('express');
const compartment_controlers= require('../controllers/compartment');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', compartment_controlers.compartment_view_all_Page );

module.exports = router;
router.get('/detail', compartment_controlers.compartment_view_one_Page);
/* GET create compartment page */
router.get('/create',secured, compartment_controlers.compartment_create_Page);
/* GET create update page */
router.get('/update',secured, compartment_controlers.compartment_update_Page);
/* GET delete costume page */
router.get('/delete',secured, compartment_controlers.compartment_delete_Page);
