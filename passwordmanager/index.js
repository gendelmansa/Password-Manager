const express = require('express')
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise; //gets rid of warning message in terminal
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log("could not connect to database: ", err); //if there is an error the console will display it, otherwise it will display the name of the data base
    } else {
        console.log(config.secret); //displays encryption
        console.log('connected to database: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'))

app.get('*', (req, res) => {
  res.sendFile(path.join('/client/dist/index.html'))
});

app.listen(8080, () => {
    console.log('Listening on port 8080')
});