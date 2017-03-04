$(document).ready(function(){
	var gameData = {
		q: 0,
		qTime: 15,
		unanswered: 0,
		rightAnswers: 0,
		wrongAnswers: 0,
		questions: [
			{ 	text: 'Among Hugh Jackman\'s co-stars in "X-Men: Apocalypse" was:',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
				answer: 'B',
				options: 
					{	
						A: 'Robert Downey Jr.',
						B: 'Michael Fassbender',
						C: 'Kate Beckinsale',
						D: 'Dustin Sparks'
					}
		 	},
		 	{ 	text: 'Michael Fassbender starred in "12 Years a Slave" with:',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg',
				answer: 'C',
				options: 
					{	
						A: 'Javier Bardem',
						B: 'Denzel Washington',
						C: 'Chiwetel Ejiofor',
						D: 'Anthony Hopkins'
					}
		 	},
			{ 	text: 'Chiwetel Ejiofor starred opposite this actor in "Dr. Strange":',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzA5MDEyMTY3Nl5BMl5BanBnXkFtZTgwODQ0MjcxMDE@._V1_SY1000_CR0,0,716,1000_AL_.jpg',
				answer: 'A',
				options: 
					{	
						A: 'Benedict Cumberbatch',
						B: 'Chris Hemsworth',
						C: 'Chris Pratt',
						D: 'Naomi Watts'
					}
		 	},
		 	{ 	text: 'Who, hosting with Amy Poehler, comically picked Benedict Cumberbatch out of the Golden Globes crowd in 2015 to present with Jennifer Anniston?',
				image: 'https://68.media.tumblr.com/7b7db4259ec3f8c6eea01fe15cf30045/tumblr_ni1je2EdNq1rbf5cro1_500.gif',
				answer: 'D',
				options: 
					{	
						A: 'Melissa McCarthy',
						B: 'Kate McKinnon',
						C: 'Ellen DeGeneres',
						D: 'Tina Fey'
					}
		 	},
		 	{ 	text: 'With what actor does Tina Fey flirt in "Date Night"?',
				image: 'https://klling.files.wordpress.com/2013/03/date-night-with-mark-wahlberg.jpg',
				answer: 'A',
				options: 
					{	
						A: 'Mark Wahlberg',
						B: 'Jon Hamm',
						C: 'Chris Hemsworth',
						D: 'James Franco'
					}
		 	},
		 	{ 	text: 'Who, portraying an airline pilot, dates Tina Fey\'s Liz Lemon on the TV show "30 Rock"?',
				image: 'http://thedamper.com/images/1330.jpg',
				answer: 'D',
				options: 
					{	
						A: 'Jason Stathakis',
						B: 'Alex Baldwin',
						C: 'Jon Hamm',
						D: 'Matt Damon'
					}
		 	},
		 	{ 	text: 'This actor played Matt Damon\'s co-conspirator in a casino robbery in "Ocean\'s Eleven":',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
				answer: 'C',
				options: 
					{	
						A: 'Ben Affleck',
						B: 'Robin Williams',
						C: 'Brad Pitt',
						D: 'Chris Pine'
					}
		 	},
		 	{ 	text: 'Which actor co-starred in "Seven" with Brad Pitt?',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg',
				answer: 'A',
				options: 
					{	
						A: 'Morgan Freeman',
						B: 'Kevin Spacey',
						C: 'Clive Owen',
						D: 'Tom Cruise'
					}
		 	},
		 	{ 	text: 'Who acted with Morgan Freeman as the central character in "Shawshank Redemption"?',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
				answer: 'B',
				options: 
					{	
						A: 'Frank Darabont',
						B: 'Tim Robbins',
						C: 'Clancy Brown',
						D: 'Alan Tudyk'
					}
		 	},
		 	{ 	text: 'Tim Robbins was joined in the cast of "Mystic River" by which actor playing the part of Sean Devine?',
				image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTQxMTEyMjI0NV5BMl5BanBnXkFtZTgwODE4ODAzMjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
				answer: 'D',
				options: 
					{	
						A: 'Mark Wahlberg',
						B: 'Casey Affleck',
						C: 'Sean Penn',
						D: 'Kevin Bacon'
					}
		 	}
			],
	messages: {
		right: 'That\'s correct!',
		wrong: 'Sorry, you\'re incorrect!',
		timeout: 'Sorry, you\'re out of time!'
		},
	startTimer: function(){ 
		//acquire the question time amount
		timeLeft=gameData.qTime; 

		// update time in html every 1 second 
		$('#countdown').html('Time remaining: '+timeLeft--);
		counter = setInterval(function(){
			$('#countdown').html('Time remaining: '+timeLeft--);
			if (timeLeft < 0){
				gameData.stopTimer();
				gameData.timesUp();

			}
			},1000)
		},
	stopTimer: function(){
		clearInterval(counter)
		},
	
	nextQuestion: function(){

		// if this is the first question, set the question delay to 0 and hide the Start button
		if (gameData.q == 0) { 
			gameData.gameDelay = 0;
			$("#startButton").hide();
		}
		else 
			gameData.gameDelay = 4000;
		
		// this is the timer after a question round, before the next question is shown 
		setTimeout(function(){
			// clear any old messages
			$('#messageArea').empty();
			
			// are we still within the bounds of the question array?
			if (gameData.q < gameData.questions.length) {
				gameData.startTimer();
				gameData.showQuestion(gameData.q)
				}
			// end of questions - show game results
			else
				gameData.showResults()
			},gameData.gameDelay); // end of gameDelay timeout function
	}, // end nextQuestion function

	showQuestion: function(thisQ) {
		
		// place question text and image in html
		$("#questionArea").html(gameData.questions[thisQ].text);
		$("#imageArea").html("<img src='"+gameData.questions[thisQ].image+"'/>");
		
		//extract keys of options object into a letters array
		var letters = Object.keys(gameData.questions[thisQ].options);
		$("#optionsArea").empty();
		// iterate over letters array to build options area
		$(letters).each( function(index) {
			$("#optionsArea").append('<div class="option" data-choice="'+letters[index]+'">'+letters[index]+': '+gameData.questions[thisQ].options[letters[index]]+'</div>')
				});

		// add click listener to each option; it  passes the option data-choice attribute to the choose function; also, set cursor style to pointer
		$('.option').on('click',function(){
			gameData.choose($(this).attr("data-choice"))
			}).css("cursor","pointer");

		// increment for next question
		gameData.q++; 
		},  // end showQuestion function
	
	choose: function(choice) {
		// remove click events to prevent additional choices; these will be added back with each showQuestion cycle; remove pointer style for cursor
		$(".option").off().css("cursor","auto");

		// compare to index q-1 because by this point, q++ has occurred  
		if (choice == gameData.questions[gameData.q-1].answer)
			gameData.correct()
		else
			gameData.incorrect()
		}, // end choose function
	timesUp: function(){
		// stop the countdown
		gameData.stopTimer();
		
		$(".option").off().css("cursor","auto");
		
		// add class "right" to the correct answer to highlight it
		$(".option").filter(function( index ){ 
			return $(this).attr("data-choice") == gameData.questions[gameData.q-1].answer
			}).addClass("right");

		// send the "times up" message to user
		gameData.message('timeout');
		
		// start next question cycle
		gameData.nextQuestion();

		// track results
		gameData.unanswered++
		},

	correct: function(){
		// stop the countdown
		gameData.stopTimer();

		// add class "right" to the correct answer to highlight it
		$(".option").filter(function( index ){ 
			return $(this).attr("data-choice") == gameData.questions[gameData.q-1].answer
			}).addClass("right");

		// send "correct" message to user
		gameData.message('right');

		// track results
		gameData.rightAnswers++;
		
		// start next question cycle
		gameData.nextQuestion()
		},

	incorrect: function(){

		// stop the countdown
		gameData.stopTimer();

		// add class "right" to the correct answer to highlight it
		$(".option").filter(function( index ){ 
			return $(this).attr("data-choice") == gameData.questions[gameData.q-1].answer
			}).addClass("right");

		// signal wrong answer to user
		gameData.message('wrong');

		// track results
		gameData.wrongAnswers++;

		// start next question cycle
		gameData.nextQuestion()
		},

	showResults: function() {
		// empty last question, options, image and countdown areas
		$("#questionArea").empty();
		$("#optionsArea").empty();
		$("#countdown").empty();
		$("#imageArea").empty();
		
		// display results
		$("#messageArea").html(
			"Thanks for playing!<br/>Here's how you did:<br/>"+
			"<strong>Correct answers:</strong> "+gameData.rightAnswers+ 
			"<br/><strong>Wrong answers:</strong> "+gameData.wrongAnswers+
			"<br/><strong>Unanswered questions:</strong> "+gameData.unanswered
			);

		//restore start button, but evolved as a replay/reset button
		$("#startButton").children("button").text("Replay").on("click",function(){
				gameData.q = 0;
				gameData.unanswered = 0;
				gameData.rightAnswers = 0;
				gameData.wrongAnswers = 0;
				gameData.nextQuestion
			});
		$("#startButton").show();
	},


	message: function(input){ 
		$('#countdown').html(gameData.messages[input]);
		}


	} // end gameData object

	$(document).on("click","#startButton",gameData.nextQuestion);



})// end document ready