const Company = require('../models/company.model.js');


// POST a Company
exports.create = (req, res) => {
    // Create a Company
    const company = new Company(req.body);

    // Save a Companys in the MongoDB
    company.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// FETCH all Companys
exports.findAll = (req, res) => {
    Company.find()
    .then(company => {
        res.json(company);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// FIND a Company
exports.findOne = (req, res) => {
    Company.findById(req.params.companyId)
    .then(company => {
        if(!company) {
            return res.status(404).json({
                msg: "company not found with id " + req.params.companyId
            });            
        }
        res.json(company);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Company not found with id " + req.params.companyId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving Company with id " + req.params.companyId
        });
    });
};

// UPDATE a Company
exports.update = (req, res) => {
    // Find Company and update it
    Company.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(company => {
        if(!company) {
            return res.status(404).json({
                msg: "Company not found with id " + req.params.companyId
            });
        }
        res.json(company);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Company not found with id " + req.params.companyId
            });                
        }
        return res.status(500).json({
            msg: "Error updating Company with id " + req.params.companyId
        });
    });
};

// DELETE a Company
exports.delete = (req, res) => {
    Company.findByIdAndRemove(req.params.companyId)
    .then(company => {
        if(!company) {
            return res.status(404).json({
                msg: "Company not found with id " + req.params.companyId
            });
        }
        res.json({msg: "Company deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Company not found with id " + req.params.companyId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete Company with id " + req.params.companyId
        });
    });
};