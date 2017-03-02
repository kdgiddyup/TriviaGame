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