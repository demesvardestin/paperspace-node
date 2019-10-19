module.exports = (app) => {
    const addressController = require('../controllers/address.controller.js');

    // Create a new address
    app.post('/addresses', addressController.create);

    // Retrieve all addresses
    app.get('/addresses', addressController.findAll);

    // Retrieve a single address with addressId
    app.get('/addresses/:addressId', addressController.findOne);

    // Update a address with addressId
    app.put('/addresses/:addressId', addressController.update);

    // Delete a address with addressId
    app.delete('/addresses/:addressId', addressController.delete);
};