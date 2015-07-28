// Grabs the json data and outputs it to index.html 
$(document).ready(function() {
	var appAPI = "./all-links.json";
	$.getJSON(appAPI)
	   .done(function (data){
	   		var stoolHTML = '';
	   		$.each(data.stools, function(i, item){
				stoolHTML += '<div class="col-md-8 clearfix listing parent panel panel-default pull-left">';
				stoolHTML += '<ul class="pull-left">';
	   		   	stoolHTML += '<li class="title"><h3 class="clearfix">' + item.title + '</h3></li>';
	   		   	stoolHTML += '<li class="price">Price: ' + item.price + '</li>';
	   		   	stoolHTML += '<li class="link"><a href="' + item.link + '">Click for more info</a></li>';
	   		   	stoolHTML += '<li><button type="button" class="btn btn-primary save"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>   Save</button><button type="button" class="btn btn-danger delete"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>   Delete</button></li>'
	   			stoolHTML += '</ul>';
	   			stoolHTML += '<span class="glyphicon glyphicon-search pull-right hidden-md" aria-hidden="true"></span>';
	   			stoolHTML += '</div>';
	   		});
   		$('#stage').html(stoolHTML);
	});

	$(document).on('click', '.save', function() {
		var list = new Object();
		$(this).closest('ul').each(function() {
			list.title = $('.title', this).text();
			list.price = $('.price', this).text();
			list.link = $('.link a', this).attr('href');
			return list;
		});

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

	$(document).on('click', '.delete', function() {
		$(this).closest('div').remove();
	});
});