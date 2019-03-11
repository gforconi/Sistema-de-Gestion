const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const Company = require('./app/models/company.model.js');
const Users = require('./app/models/users.model.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    

    Company.remove({}, function(err) { 

       if(err){
          console.log(err);
          process.exit();
       }
       
       console.log('Company collection removed');
       // -> initial new data
       initialCompany();
    });
    Users.remove({}, function(err) { 

      if(err){
         console.log(err);
         process.exit();
      }
      
      console.log('Users collection removed');
      // -> initial new data
      initialUsers();
   });

}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))

require('./app/routes/app.routes.js')(app);

// Create a Server
const server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

function initialCompany(){
 
    let companies = [
      {
        name: "Default",
        address: "afsdfasd",
        zipCode: 2133,
        city: "fasdfsda",
        state: "fasdfdsa",
        CUIT: "fasdfds",
        IVAConditionID: "dfsafds",
        IIBNumber: 3445,
        dStartActivity: "2019-01-01"
      },
      {
        name: "Default2",
        address: "afsdfasd2",
        zipCode: 21332,
        city: "fasdfsda2",
        state: "fasdfdsa2",
        CUIT: "fasdfds2",
        IVAConditionID: "dfsafds2",
        IIBNumber: 34452,
        dStartActivity: "2019-01-01"
      }
    ]
   
    // Init data -> save to MongoDB

    for (let i = 0; i < companies.length; i++) { 
        const company = new Company(companies[i]);
        company.save();
    }

    console.log(">>> Done - Company - Initial Data!");
}

function initialUsers(){
 
  let users = [
    {
      name: "Default",
      lastname: "afsdfasd",
      image: "2133",
      email: "fasdfsda",
      password: "masita",
      confirmation: True,
      created_at: "2019-01-01"
    }
  ]
 
  // Init data -> save to MongoDB

  for (let i = 0; i < users.length; i++) { 
      const company = new Users(users[i]);
      company.save();
  }

  console.log(">>> Done - Users - Initial Data!");
}