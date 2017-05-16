var path = require('path');

module.exports = function (app) {



	app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//app.use takes any link that isnt /survey and directs it to the HP
	app.use( function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}