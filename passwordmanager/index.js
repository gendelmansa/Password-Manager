const express = require('express')
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors')
 //gets rid of warning message in terminal
mongoose.Promise = global.Promise;

//connects to database (see config.js), useMongoClient:true is a newer connection method for newer versions of mongoose
mongoose.connect(
    
    config.uri,
    
    { useMongoClient:true },
    
    (err) => {
    if (err) {
        
        console.log("could not connect to database: ", err); //if there is an error the console will display it, otherwise it will display the name of the data base
    
    } else {
        console.log(config.secret); //displays encryption
        console.log('connected to database: ' + config.db);
    }

});

//Middleware  (use before the routes!!!) bodyParser is used to turn front end js into .json so the back end can read it
app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Provides a static directory for the front end
//*app.use(express.static(__dirname + '/client/dist/'))
app.use('/authentication', authentication)

//connects server to my Angular 2 index.html
app.get('*', (req, res) => {
 // *res.sendFile(path.join(__dirname, '/client/dist/index.html'))
});

//Has server listen on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080')
});