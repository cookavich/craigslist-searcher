// Grabs the json data and outputs it to index.html 


$(document).ready(function() {
	var user;
	var appAPI = "./all-links.json";
	$(document).on('keydown', '#user', function() {
        user=$("#user").val();
        if(event.keyCode==13){
	        $.post("http://localhost:8080/search",{user: user}, function(data){
	            if(data==='done')
	              {
	                alert("login success");
	              }
	        });
    	}
    });   
	
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

	var list = new Object();
	$(document).on('click', '.save', function() {
		$(this).closest('ul').each(function() {
			list.title 	= $('.title', this).text();
			list.price 	= $('.price', this).text();
			list.link 	= $('.link a', this).attr('href');
			list.notes 	= $('.notes textarea', this).val();
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