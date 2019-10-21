const Address = require('../models/address.model.js');

// create new
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

// retrieve all
exports.findAll = (req, res) => {
    Address.find()
    .then(addresses => {
        let tempStates = addresses.map(a => a.state);
        let tempCountries = addresses.map(a => a.country);
        let states = [];
        let countries = [];
        let filterPresent = false;
        
        tempStates.forEach(s => {
            if (!states.includes(s)) {
        		states.push(s);
            }
        });
        
        tempCountries.forEach(c => {
            if (!countries.includes(c)) {
        		countries.push(c);
            }
        });
        
        if (req.query.state || req.query.country) {
            filterPresent = true;
        }
        
        if (req.query.state) {
            addresses = addresses.filter(a => a.state == req.query.state);
        }
        
        if (req.query.country) {
            addresses = addresses.filter(a => a.country == req.query.country);
        }
        
        res.render('index', { addresses: addresses, states: states, countries: countries, filter: filterPresent });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred."
        });
    });
};

// retrieve one
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

// update
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

// delete
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