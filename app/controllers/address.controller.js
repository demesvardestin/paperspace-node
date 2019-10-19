const Address = require('../models/address.model.js');

// Create and Save a new address
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: `${req.params}`
        });
    }
    
    const address = new Address({
        name: req.body.name, 
        street: req.body.street,
        city: req.body.street,
        state: req.body.state,
        country: req.body.country
    });
    
    address.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred."
        });
    });
};

// Retrieve and return all addresses from the database.
exports.findAll = (req, res) => {
    Address.find()
    .then(addresses => {
        res.send(addresses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred."
        });
    });
};

// Find a single address with a addressId
exports.findOne = (req, res) => {
    Address.findById(req.params.addressId)
    .then(address => {
        if(!address) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.addressId
            });            
        }
        res.send(address);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.addressId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.addressId
        });
    });
};

// Update a address identified by the addressId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Address.findByIdAndUpdate(req.params.addressId, {
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    }, { new: true })
    .then(address => {
        if(!address) {
            return res.status(404).send({
                message: "Record not found with id " + req.params.addressId
            });
        }
        res.send(address);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.addressId
            });                
        }
        return res.status(500).send({
            message: "Error updating record with id " + req.params.addressId
        });
    });
};

// Delete a address with the specified addressId in the request
exports.delete = (req, res) => {
    Address.findByIdAndRemove(req.params.addressId)
    .then(address => {
        if(!address) {
            return res.status(404).send({
                message: "Address not found with id " + req.params.addressId
            });
        }
        res.send({message: "Address deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Address not found with id " + req.params.addressId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.addressId
        });
    });
};