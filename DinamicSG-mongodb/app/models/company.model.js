const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name: String,
    address: String,
    zipCode: Number,
    city: String,
    state: String,
    CUIT: String,
    IVAConditionID: String,
    IIBNumber: Number,
    dStartActivity: Date
});

module.exports = mongoose.model('Company', CompanySchema);