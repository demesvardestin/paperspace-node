const bodyParser = require('body-parser');
const Address = require('../models/address.model.js');

// Create and Save a new address
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: `${req.body}`
        });
    }
    
    const address = new Address({
        name: req.body.name, 
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    });
    
    address.save().then(data => {
        res.redirect('/addresses');
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
        res.render('index', { addresses: addresses });
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
        res.render('show', { address: address });
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};

// update via html form
exports.updateAddress = (req, res) => {
    Address.findByIdAndUpdate(req.params.addressId, {
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    }, { new: true })
    .then(address => {
        res.redirect(`/addresses/${address.id}`);
    }).catch(err => {
        return res.status(500).send({
            message: err
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
        res.redirect(`/addresses/${address.id}`);
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};

// html delete
exports.deleteAddress = (req, res) => {
    Address.findByIdAndRemove(req.params.addressId)
    .then(address => {
        res.redirect('/addresses');
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};

// Delete a address with the specified addressId in the request
exports.delete = (req, res) => {
    Address.findByIdAndRemove(req.params.addressId)
    .then(address => {
        res.send({message: "Address deleted successfully!"});
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};