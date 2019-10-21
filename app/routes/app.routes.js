module.exports = (app) => {
    const addressController = require('../controllers/address.controller.js');
    const apiController = require('../controllers/api.controller.js')
    // Create a new address
    app.post('/addresses', addressController.create);

    // Retrieve all addresses
    app.get('/addresses', addressController.findAll);

    // Retrieve a single address with addressId
    app.get('/addresses/:addressId', addressController.findOne);
    
    // html update
    app.post('/update_address/:addressId', addressController.updateAddress);
    
    // html delete
    app.post('/delete_address/:addressId', addressController.deleteAddress);
    
    
    // API-only ROUTES
    
    // Create a new address
    app.post('/api/addresses', apiController.newRecord);
    
    // Retrieve a single address with addressId
    app.get('/api/addresses/:addressId', apiController.findOneRecord);
    
    // get all address records
    app.get('/api/addresses', apiController.findAllRecords);
    
    // Update a address with addressId
    app.put('/api/addresses/:addressId', apiController.updateRecord);
    
    // Delete a address with addressId
    app.delete('/api/addresses/:addressId', apiController.deleteRecord);
};