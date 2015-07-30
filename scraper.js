// var Xray = require('x-ray');  
// var x = Xray()

// var url = 'https://louisville.craigslist.org/search/sss?query=stools;

// // Grabs data off of Craigslist and then stores it in a JSON file
// var jsonList = x(url, {
// 	stools: x('span.txt', [{
// 		title: 'a.hdrlnk',
// 		price: 'span.price',
// 		link: 'a.hdrlnk @href',
// 	}])		
// 	}).write('./public/all-links.json', JSON.stringify(jsonList), function(err){
// 	console.log('File successfully written! - Check your project directory for the .json file');
// });