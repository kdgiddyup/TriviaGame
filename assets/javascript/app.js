$(document).ready(function(){
	var gameData = {
		q: 0,
		qTime: 5,
		unanswered: 0,
		rightAnswers: 0,
		wrongAnswers: 0,
		questions: [
			{ 	text: 'this is question 1',
				image: 'url',
				answer: 'A',
				options: 
					{	
						A: 'answer1 text - correct',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 2',
				image: 'url',
				answer: 'B',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text - correct',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
			{ 	text: 'this is question 3',
				image: 'url',
				answer: 'C',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text - correct',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 4',
				image: 'url',
				answer: 'D',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text - correct'
					}
		 	},
		 	{ 	text: 'this is question 5',
				image: 'url',
				answer: 'A',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 6',
				image: 'url',
				answer: 'B',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 7',
				image: 'url',
				answer: 'C',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 8',
				image: 'url',
				answer: 'D',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 9',
				image: 'url',
				answer: 'A',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
					}
		 	},
		 	{ 	text: 'this is question 10',
				image: 'url',
				answer: 'B',
				options: 
					{	
						A: 'answer1 text',
						B: 'answer2 text',
						C: 'answer3 text',
						D: 'answer4 text'
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
		$('#countdown').html('Time remaining: '+timeLeft--+' seconds');
		counter = setInterval(function(){
			$('#countdown').html('Time remaining: '+timeLeft--+' seconds');
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
		console.log(gameData);

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
		
		// place question text in html
		$("#questionArea").html(gameData.questions[thisQ].text);
		
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
			gameData.correct(choice)
		else
			gameData.incorrect(choice)
		}, // end choose function
	timesUp: function(){
		// stop the countdown
		gameData.stopTimer();
		
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

	correct: function(userChoice){
		// stop the countdown
		gameData.stopTimer();
		gameData.message('right');
		gameData.rightAnswers++;
		gameData.nextQuestion()
		},

	incorrect: function(userChoice){
		gameData.stopTimer();
		gameData.message('wrong');
		gameData.wrongAnswers++;
		gameData.nextQuestion()
		},



	message: function(input){ 
		$('#messageArea').html(gameData.messages[input]);
		/* 
			if (input == 'wrong' || input == 'timeout')
			messageArea.append('The correct answer is ')
		*/
		}


	} // end gameData object

	$(document).on("click","#startButton",gameData.nextQuestion);



})// end document ready

/* psuedo code
GAME FLOW:

start button to start the game

one question, multiple choice answers


timer immediately begins (25 sec)

Case A:
click wrong answer: message wrong answer, show right answer/image

after 4 or 5 seconds, move to next question and restart timer

Case B:
time runs out: message time up, show right answer/image

after 4 or 5 seconds, move to next question and restart timer

if last question:
show message "all done here's how you did"
answers correct:
answers incorrect:
answers unanswered

Start over button appears


HTML STRUCTURE

game canvas initial state holds visible START button,
hidden question module, hidden results area and hidden START OVER button

on start, start button is hidden (not removed, to make reset easier) and question module is revealed. 

Question module consists of timer, question, answer options, game message (right, wrong, time up) area, right answer image
	 - question and answers are built programmatically from game object; answer options are given ids passed back in click event

after last question outcome is determined, game results are revealed

CODE STRUCTURE

to do:  how to watch for timeLeft == 0 to trigger gameData.timesUp

gameData
	q: 0,
	rightAnswers: 0,
	wrongAnswers: 0,
	unanswered: 0,
	qTime: 25,
	userchoice: '',
	resetGame: function() {
		gameData.rightAnswers = 0;
		gameData.wrongAnswers = 0;
		gameData.unanswered = 0;
		gameData.q = 0;
		gameData.nextQuestion
		},
	startTimer: function(){ 
		timeLeft=gameData.qTime; 
		counter = setInterval(function(){
			$('#countdown').html('Time remaining: '+timeLeft--+' seconds'),1000)
			}
		},
	stopTimer: function(){clearInterval(counter)},
	nextQuestion: function(){ setTimeout(
		function(){
			q++;
			if (q < gameData.questions.length) {
				gameData.startTimer;
				gameData.showQuestion(q)
				},4000)
			} 
		},
	showQuestion: function(thisQ) {
		messageArea.html(gameData.questions[thisQ].text);
		var letters = Object.keys(gameData.questions[thisQ].options);
		gameData.questions[thisQ].options.each( index ) {
			'<span id="'+letters[index]+'">'+optionsArea.html(letters[index]+': '+gameData.questions[thisQ].options[letters[index]]+'</span>').on('click',gameData.choose)
			}
		},
	choose: function($(this)) {
		userChoice = $(this);
		if ($(this).id == gameData.questions[thisQ].answer)
			correct
		else
			incorrect
		},
	timesUp: function(){
		gameData.stopTimer;
		gameData.message('timeout');
		gameData.nextQuestion;
		gameData.unanswered++
		},
	correct: function(){
		gameData.stopTimer;
		gameData.message('right');
		gameData.correctAnswers++
		}
	incorrect: function(){
		gameData.stopTimer;
		gameData.message('wrong');
		gameData.wrongAnswers++
		},
	message: function(input,option){ 
		messageArea.html(gameData.messages[input]);
		if (input == 'wrong' || input == 'timeout')
			messageArea.append('The correct answer is ')
		},
	questions:
		[
			{ 
			text: question string,
			image: url,
			answer: A,
			options: 
				{A: answer1 text},
				{B: answer2 text},
				{C: answer3 text},
				{D: answer4 text}
		 	}
			{
			....
			}
		],
	messages:
		right: 'That's correct!'
		wrong: 'Sorry, you're incorrect!'
		timeout: 'Sorry, you're out of time!'
	

*/