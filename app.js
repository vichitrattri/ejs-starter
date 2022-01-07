//Require express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

//Create app from express
const app = express();

//Set ejs as view engine
app.set('view engine', 'ejs')

var username = "Vichitra"

//Get homepage to display index.html
app.get('/', function (req, res) {
    res.render('index', { Username: username })
})

//Listen on port 3000 for http requests
app.listen('3000', function () {
    console.log('Listening on port 3000');
})
