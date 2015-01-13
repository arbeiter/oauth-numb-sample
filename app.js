var express = require('express'),
    routes = require('routes'),
    jade = require('jade'),
    http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
	console.log("listenin");
});

app.use(bodyParser);
app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('layout');
});


//Set up basic server
//Set up async call chain
//Add Oauth.js file
//Get file list from google drive
//Render all file names on the html page
