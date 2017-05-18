var friendsData = require('../data/friends.js');

var path = require('path');

var totalDifference = 0;


//when user visits this page they are showed the JSON data in the table
module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);

	});

//this engages when a user submits a form and pushes the data to the server
//the information should replace the info in the friendsData array, but modal is messing that up
//and i dont know how to fix it (surprise)
	app.post('api/friends', function (req, res) {

		var greatMatch = {
			name: "",
			photo: "",
			matchDifference: 40
		};

		//^^since the greatest difference in score is 4 for any question, the greatest difference for total is 40,
		//because there are 10 questions
//this data should be pushed to the appropriate javascript array

		var userData = req.body;
		var userName= userData.name;
		var userPhoto = user.photo;
		var userScores = userData.scores;

		
		
			// should loop through the friendsData array to get their scores

		  for(var i = 0; i < [friendsData].length-1; i++) {
			console.log(friendsData[i].name);
			totalDifference=0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above

		   for(var j = 0; j < 10; j++) {

		   	//found this on stackoverflow as well as github

			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

			if (totalDifference <= greatMatch.friendDifference) {

				greatMatch.name= friendsData[i].name
				greatMatch.photo = friendsData[i].photo;
				greatMatch.matchDifference = totalDifference;
			}
		}
		

	}

			//should put the new friend from survey in databse, but it doesnt work with the modal, can't figure out why

			friendsData.push(userData);

			//should return the best match 
		res.json(greatMatch);
	});
};

//I tried looking at a bunch of code and this is what I came up with, I don't understand why my modal is coming back 
//undefined, but I tried messing with it a for a long time to no avail. At the very least I tried to make the code look good. 