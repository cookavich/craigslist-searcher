// Handles the jQuery for storage.html
$(document).ready(function() {
	var storage = "./data.json";

	$.getJSON(storage)
	   	.done(function (data){
	   		var stoolHTML = '';
	   		$.each(data, function(i, item){
				stoolHTML += '<div class="col-md-8 listing parent well">';
				stoolHTML += '<ul>';
	   		   	stoolHTML += '<li class="title"><h3>' + item.title + '</h3></li>';
	   		   	stoolHTML += '<li class="price">Price: ' + item.price + '</li>';
	   		   	stoolHTML += '<li class="link"><a href="' + item.link + '">Click for more info</a></li>';
	   		   	stoolHTML += '<button type="button" class="btn btn-danger btn-lg delete"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>   Delete</button></li>'
	   			stoolHTML += '</ul>';
	   			stoolHTML += '</div>';
	   		});
			$('#saved').html(stoolHTML);
		});
	$(document).on('click', '.delete', function() {
		$(this).closest('div').remove();
	});
});
