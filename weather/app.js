const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=8056%20kingswood%20way%20melbourne&key=AIzaSyBJ4mxNkWsES6QuRr253A7JO-KzBgKwlzk',
	json: true
}, (error, response, body) => {
	console.log(body);
});