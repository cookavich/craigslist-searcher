// Handles the saving of the listing via an AJAX call with the MongoDB database. 
$(document).on('click', '.save', function() {
	var list = new Object();
	// Grabs each of these items from the DOM
	$(this).closest('ul').each(function() {
		list.title 	= $('.title', this).text();
		list.price 	= $('.price', this).text();
		list.link 	= $('.link a', this).attr('href');
		list.notes 	= $('.notes textarea', this).val();
		return list;
	});
	
	// Sends them of to the database
	$.ajax({
			url: "https://api.mongolab.com/api/1/databases/geolocation/collections/boom?apiKey=f58E311FP8bY9rMS1NtzXCiVTXqC2V5O",
			type: "POST",
			data:  JSON.stringify(list),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function( msg ) {
			console.log(msg);
	});
	$(this).closest('div').remove();
});
