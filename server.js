// CALL THE PACKAGES ---------------------------------------
var fs 			    = require('fs');
var express 	  = require('express');
var bodyParser 	= require('body-parser');
var jsonfile    = require('jsonfile');
var util        = require('util');
var Xray        = require('x-ray');  
var x           = Xray()



// ---------------------------------------
// var scraper 	= require('./scraper'); // scraper route
var mongo = require('./mongo.js'); 


// ---------------------------------------
var app 		= express();
var port 		= process.env.PORT || 8080; // sets the port for the app


// HANDLES THE THE SCRAPING
// =======================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
 
app.post('/search',function(req,res){
  var user_search=req.body.user;
  console.log("Search = " + user_search);

  var url = 'https://louisville.craigslist.org/search/sss?query=' + user_search;

  // Grabs data off of Craigslist and then stores it in a JSON file
  var jsonList = x(url, {
    stools: x('span.txt', [{
      title: 'a.hdrlnk',
      price: 'span.price',
      link: 'a.hdrlnk @href',
    }])   
    }).write('./public/all-links.json', JSON.stringify(jsonList), function(err){
    console.log('File successfully written! - Check your project directory for the .json file');
  });

  res.end("yes");
});

// START UP THE OLD SERVER
// =======================================
app.listen(port);
console.log('Magic happens on port ' + port);