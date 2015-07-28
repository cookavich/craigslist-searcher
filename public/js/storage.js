// Handles the jQuery for storage.html

   $.ajax({
	        type: "GET",
	        url: "https://api.mongolab.com/api/1/databases/geolocation/collections/boom?apiKey=f58E311FP8bY9rMS1NtzXCiVTXqC2V5O",
	        contentType: "application/json; charset=utf-8",
	        dataType: "json",                        
	        success: function (response) {

	            console.log("success");
	        },
	        error: function (response){

	            console.log("failed");
	        }
		});