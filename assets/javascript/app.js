//Create var to hold questions
var questionBank = [
    "What are the Coen Brothers first names?",
    "What was the Coen Brothers first film?",
    "In which Coen Brothers film does a car salesman stage his wife's kidnapping?",
    "In which Coen Brothers film does a Vietnam veteran become the target of a hitman after stealing $2 million of drug money?",
    "In which Coen Brothers film is a bowling-obsessed slacker mistaken for a millionaire that shares his name?",
    "In Barton Fink (1991), John Goodman's character reveals himself to be a famous serial killer named what?",
    "In Burn After Reading (2008), Brad Pitt's character believes that he stumbles on top secret government intelligence. What does it turn out that he is actually reading?",
    "O Brother, Where Art Thou? (2000) is the Coen Brothers Depression-era take on which famous story?",
    "What is the Coen Brothers top grossing film?",
    "Which of the following major Hollywood actors/actresses has never appeared in a Coen Brothers film?"
]

var correctAnswer;
var userGuess;



//Create global variables for gameplay
var clockRunning = false;
var timer = 30;

//Click event that removes all content from container div
$('button').on("click", function() {
    console.log("button clicked");
    $('.gameTitle').empty().removeClass('gameTitle').addClass('question');
    $('.startButton').remove();
//Populates .question div with first question and 4 possible answers
    $('.question').text(questionBank[0]);
    $('.container').append('<button type=button class=answer choice1>James and Evan</button>');
    $('.container').append('<button type=button class=answer choice2>Joel and Ethan</button>');
    $('.container').append('<button type=button class=answer choice3>Jeff and Eric</button>');
    $('.container').append('<button type=button class=answer choice4>Jacob and Eldyn</button>');

    clockRunning = true;
});
//If user clicks correct answer, create content in container div that congratulates them and shows a picture for 4 seconds
//If user clicks wrong answer, create content in container div that tells them the correct answer and shows a picture for 4 seconds
//If timer runs out, create content in container div that tells them they ran out of time and shows a picture for 4 seconds
//After 4 seconds, go to next question and restart timer
//After all questions displayed, show number of correct answers and incorrect answers
//Create option to restart without reloading the page