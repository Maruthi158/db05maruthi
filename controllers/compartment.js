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
exports.compartment_detail = async function (req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await compartment.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

    res.send('NOT IMPLEMENTED: Compartment detail: ' + req.params.id);
};
// Handle Compartment create on POST.
exports.compartment_create_post = async function (req, res) {
    res.send('NOT IMPLEMENTED: Compartment create POST');
};
// Handle Compartment delete form on DELETE.
exports.compartment_delete = async function (req, res) {
    try {
        result = await compartment.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

    res.send('NOT IMPLEMENTED: Compartment delete DELETE ' + req.params.id);
};
// Handle Compartment update form on PUT.
exports.compartment_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await compartment.findById( req.params.id)
        // Do updates of properties
        if(req.body.compartment_name) toUpdate.compartment_name = req.body.compartment_name;
        if(req.body.compartment_ID) toUpdate.compartment_ID = req.body.compartment_ID;
        if(req.body.compartment_type) toUpdate.compartment_type = req.body.compartment_type;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

    res.send('NOT IMPLEMENTED: Compartment update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.compartment_view_all_Page = async function (req, res) {
    try {
        thecompartment = await compartment.find();
        res.render('compartment', { title: 'compartment Search Results', results: thecompartment });
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.compartment_create_post = async function (req, res) {
    console.log(req.body)
    let document = new compartment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.compartment_name = req.body.compartment_name;
    document.compartment_ID = req.body.compartment_ID;
    document.compartment_type = req.body.compartment_type;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.compartment_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await compartment.findById( req.query.id)
        res.render('compartmentdetail', 
{ title: 'compartment Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.compartment_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('compartmentcreate', { title: 'compartment Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a compartment.
// query provides the id
exports.compartment_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await compartment.findById(req.query.id)
        res.render('compartmentupdate', { title: 'compartment Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.compartment_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await compartment.findById(req.query.id)
        res.render('compartmentdelete', { title: 'Compartment Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


