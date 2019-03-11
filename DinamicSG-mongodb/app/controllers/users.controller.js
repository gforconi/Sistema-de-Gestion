const Users = require('../models/users.model.js');


// POST a Users
exports.create = (req, res) => {
    // Create a Users
    const users = new Users(req.body);

    // Save a Companys in the MongoDB
    users.save()
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
    Users.find()
    .then(users => {
        res.json(users);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// FIND a Users
exports.findOne = (req, res) => {
    Users.findById(req.params.usersId)
    .then(users => {
        if(!users) {
            return res.status(404).json({
                msg: "users not found with id " + req.params.usersId
            });            
        }
        res.json(users);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Users not found with id " + req.params.usersId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving Users with id " + req.params.usersId
        });
    });
};

// UPDATE a Users
exports.update = (req, res) => {
    // Find Users and update it
    Users.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(users => {
        if(!users) {
            return res.status(404).json({
                msg: "Users not found with id " + req.params.usersId
            });
        }
        res.json(users);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Users not found with id " + req.params.usersId
            });                
        }
        return res.status(500).json({
            msg: "Error updating Users with id " + req.params.usersId
        });
    });
};

// DELETE a Users
exports.delete = (req, res) => {
    Users.findByIdAndRemove(req.params.usersId)
    .then(users => {
        if(!users) {
            return res.status(404).json({
                msg: "Users not found with id " + req.params.usersId
            });
        }
        res.json({msg: "Users deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Users not found with id " + req.params.usersId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete Users with id " + req.params.usersId
        });
    });
};