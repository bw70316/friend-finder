var friendsData = require('../data/friends.js');

var path = require('path');

var totalDifference = 0;

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);

	});

	app.post('api/friends', function (req, res) {

		var greatMatch = {
			name: "",
			photo: "",
			matchDifference: 40
		};

		var userData = req.body;
		var userName= userData.name;
		var userPhoto = user.photo;
		var userScores = userData.scores;

		var totalDifference = 0;

		  for(var i = 0; i < [friendsData].length-1; i++) {
			console.log(friendsData[i].name);
			totalDifference=0;


		   for(var j = 0; j < 5; j++) {

			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

			if (totalDifference <= greatMatch.friendDifference) {

				greatMatch.name= friendsData[i].name
				greatMatch.photo = friendsData[i].photo;
				greatMatch.matchDifference = totalDifference;
			}
		}
		

	}
			friendsData.push(userData);

		res.json(greatMatch);
	});
};