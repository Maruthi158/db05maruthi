var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var compartment_controller = require('../controllers/compartment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/compartment', compartment_controller.compartment_create_post);
// DELETE request to delete Costume.
router.delete('/compartment/:id', compartment_controller.compartment_delete);
// PUT request to update Costume.
router.put('/compartment/:id', compartment_controller.compartment_update_put);
// GET request for one Costume.
router.get('/compartment/:id', compartment_controller.compartment_detail);
// GET request for list of all Costume items.
router.get('/compartment', compartment_controller.compartment_list);
module.exports = router;