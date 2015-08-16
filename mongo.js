var MongoClient = require('mongodb').MongoClient;
var jsonfile    = require('jsonfile');
var util        = require('util');


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
