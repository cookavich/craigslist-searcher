// CALL THE PACKAGES ---------------------------------------
var fs 			    = require('fs');
var express 	  = require('express');
var bodyParser 	= require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var jsonfile    = require('jsonfile');
var util        = require('util');
var Xray = require('x-ray');  
var x = Xray()



// ---------------------------------------
// var scraper 	= require('./scraper'); // scraper route

// ---------------------------------------
var app 		= express();
var port 		= process.env.PORT || 8080; // sets the port for the app


// ROUTES FOR API
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


// CONNECT TO DATABASE
// =======================================
var mongoURL = "mongodb://party:party@ds035240.mongolab.com:35240/geolocation";

MongoClient.connect(mongoURL, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

    // Get the documents collection
    var collection = db.collection('boom');

    // Insert some users
    collection.find().toArray(function (err, result) {
      	if (err) {
        console.log(err);
      	} else if (result.length) {
        console.log('Found:', result);
      	} else {
        console.log('No document(s) found with defined "find" criteria!');
      	}

   		jsonfile.writeFile("public/data.json", result, {spaces: 2}, function (err) {
		console.error(err)
		});

    return result
    });

  	//Close connection
  	// db.close();
});
