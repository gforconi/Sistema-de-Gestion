module.exports = function(app) {
 
    const company = require('../controllers/company.controller.js');
 
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
}