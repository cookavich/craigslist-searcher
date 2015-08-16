// Handles the jQuery for storage.html
$(document).ready(function() {
	var storage = "./data.json";
	// Grabs the JSON info of the saved listings, and then recreates
	// the saved listings similar to injection.js
	$.getJSON(storage)
	   	.done(function (data){
	   		var stoolHTML = '';
	   		$.each(data, function(i, item){
				stoolHTML += '<div class="col-md-8 listing parent well">';
				stoolHTML += '<ul>';
	   		   	stoolHTML += '<li class="title"><h3>' + item.title + '</h3></li>';
	   		   	stoolHTML += '<li class="price"> ' + item.price + '</li>';
	   		   	stoolHTML += '<li class="link"><a href="' + item.link + '">Click for more info</a></li>';
	   		   	stoolHTML += '<li class="notes"><p>Notes: ' + item.notes + '</p></li>'
	   		   	stoolHTML += '<button type="button" class="btn btn-danger btn-lg delete"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>   Delete</button></li>'
	   			stoolHTML += '</ul>';
	   			stoolHTML += '</div>';
	   		});
			$('#saved').html(stoolHTML);
		});

	// Deletes the saved listing
	$(document).on('click', '.delete', function() {
		$(this).closest('div').remove();
	});
});
