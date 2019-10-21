const Address = require('../models/address.model.js');

// api create new
exports.newRecord = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: `Parameters must be provided`
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
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred."
        });
    });
};

// api retrieve all
exports.findAllRecords = (req, res) => {
    Address.find()
    .then(addresses => {
        res.status(200).send(addresses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred."
        });
    });
};

// api retrieve one
exports.findOneRecord = (req, res) => {
    Address.findById(req.params.addressId)
    .then(address => {
        res.status(200).send({address: address})
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};

// api update
exports.updateRecord = (req, res) => {
    Address.findByIdAndUpdate(req.params.addressId, {
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
    }, { new: true })
    .then(address => {
        res.send(address);
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};

// api delete
exports.deleteRecord = (req, res) => {
    Address.findByIdAndRemove(req.params.addressId)
    .then(address => {
        res.send({message: "Address deleted successfully!"});
    }).catch(err => {
        return res.status(500).send({
            message: err
        });
    });
};