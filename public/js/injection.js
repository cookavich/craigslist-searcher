// Grabs the JSON data and outputs it to index.html 
var appAPI = "./all-links.json";	
$(document).on('click', '#submit', function() {
	$.getJSON(appAPI)
	   	.done(function (data){
	   		var stoolHTML = '';
	   		$.each(data.stools, function(i, item){
				stoolHTML += '<div class="col-md-8 center-block listing parent well">';
				stoolHTML += '<ul>';
	   		   	stoolHTML += '<li class="title"><h3>' + item.title + '</h3></li>';
	   		   	stoolHTML += '<li class="price">Price: ' + item.price + '</li>';
	   		   	stoolHTML += '<li class="link"><a href="' + item.link + '">Click for more info</a></li>';
	   		   	stoolHTML += '<li class="notes"><textarea class="form-control" rows="3" placeholder="listing notes"></textarea>'
	   		   	stoolHTML += '<li><button type="button" class="btn btn-primary text-uppercase save"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>   Save</button><button type="button" class="btn btn-danger text-uppercase delete"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>   Delete</button></li>'
	   			stoolHTML += '</ul>';
	   			stoolHTML += '</div>';
	   		});
   		$('#message').html(stoolHTML);
		});
	});

// Deletes injected data without saving
$(document).on('click', '.delete', function() {
	$(this).closest('div').remove();
});