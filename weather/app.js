// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

// 0f0c82f975c9ff52605f666185b709a9

const request = require('request');

request({
	url: `https://api.darksky.net/forecast/0f0c82f975c9ff52605f666185b709a9/28.1988979,-80.7879407`,
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(`Temperature now: ${body.currently.temperature}.`);
	} else {
		console.log('Unable to fetch weather.');
	}
});