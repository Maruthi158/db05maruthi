var compartment = require('../models/compartment');
// List of all compartment

exports.compartment_list = async function (req, res) {
    try {
        thecompartments = await compartment.find();
        res.send(thecompartments);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
    res.send('NOT IMPLEMENTED: Compartment list');
};
// for a specific Compartment.
exports.compartment_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Compartment detail: ' + req.params.id);
};
// Handle Compartment create on POST.
exports.compartment_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Compartment create POST');
};
// Handle Compartment delete form on DELETE.
exports.compartment_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Compartment delete DELETE ' + req.params.id);
};
// Handle Compartment update form on PUT.
exports.compartment_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Compartment update PUT' + req.params.id);
};