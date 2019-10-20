module.exports = (app) => {
    const addressController = require('../controllers/address.controller.js');
    
    // get records by state
    app.get('/state/:state', addressController.findByState);
    
    // Create a new address
    app.post('/addresses', addressController.create);

    // Retrieve all addresses
    app.get('/addresses', addressController.findAll);

    // Retrieve a single address with addressId
    app.get('/addresses/:addressId', addressController.findOne);

    // Update a address with addressId
    app.put('/addresses/:addressId', addressController.update);
    
    // html update
    app.post('/update_address/:addressId', addressController.updateAddress);
    
    // html delete
    app.post('/delete_address/:addressId', addressController.deleteAddress);

    // Delete a address with addressId
    app.delete('/addresses/:addressId', addressController.delete);
};