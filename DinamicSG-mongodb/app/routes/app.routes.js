module.exports = function(app) {
 
    const company = require('../controllers/company.controller.js');
    const users = require('../controllers/users.controller.js');
 
    //-------------------------company inicio---------------------------------
    // Create a new Customer
    app.post('/api/company', company.create);
 
    // Retrieve all Customer
    app.get('/api/company', company.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/company/:companyId', company.findOne);
 
    // Update a Customer with Id
    app.put('/api/company', company.update);
 
    // Delete a Customer with Id
    app.delete('/api/company/:companyId', company.delete);
    //-------------------------company inicio---------------------------------

    //-------------------------users inicio---------------------------------
    // Create a new Cususerstomer
    app.post('/api/users', users.create);
 
    // Retrieve all users
    app.get('/api/users', users.findAll);
 
    // Retrieve a single users by Id
    app.get('/api/users/:userId', users.findOne);
 
    // Update a users with Id
    app.put('/api/users', users.update);
 
    // Delete a users with Id
    app.delete('/api/users/:userId', users.delete);
    //-------------------------users fin---------------------------------
}
