"use strict";

// adding modules
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;
let app = express(); /*Express app*/

var companies = require('./routes/companies');
// var data = require('./routes/')

// Client-side
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/client'));


app.use('/api/companies', companies);


// connecting to datbase
// Mongoose Connect
 mongoose.connect('mongodb://atrixdigital:atrix123@ds153669.mlab.com:53669/userproject');
let db = mongoose.connection; /*Database*/

if(db){
 console.log('connected to mongoDB');
}
app.listen(PORT);
console.log('Started on port >>'+PORT);




