const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
   name: String,
   street: String,
   city: String,
   state: String,
   country: String
}, {
    timestamps: true
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;