// Handles the searching of Craigslist. 
// Grabs the input from the searchbar, and then appends the input to the end of the url the scraper uses to search. 
$(document).ready(function() {
	var user;
	$(document).on('keydown', '#user', function() {
        user=$("#user").val();
        if(event.keyCode==13){
	        $.post("http://localhost:8080/search", {user: user}, function(data){
	            if(data==='done')
	              {
	                alert("login success");
	              }
	        });
    	}
    });   
});