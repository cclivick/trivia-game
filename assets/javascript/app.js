//Create var to hold questions

$(document).ready(function() { 

//Create global variables for gameplay    
    var questionBank = [
        {   
        question: "What are the Coen Brothers first names?",
        choices: ["James and Evan", "Joel and Ethan", "Jeff and Eric", "Jacob and Eldyn"],
        correctAnswer: 1,
        image: ("assets/images/Coenbrothers.jpg")
        }, {
        question: "What was the Coen Brothers first film?",
        choices:["Barton Fink", "Raising Arizona", "Blood Simple", "Miller's Crossing"],
        correctAnswer: 2,
        image: ("assets/images/bloodsimple.jpg")
        }, {
        question:"In which Coen Brothers film does a car salesman stage his wife's kidnapping?",
        choices:["Fargo", "A Serious Man", "Intolerable Cruelty", "The Ladykillers"],
        correctAnswer: 0,
        image: ("assets/images/fargo.jpg")
        }, {
        question:"In which Coen Brothers film does a Vietnam veteran become the target of a hitman after stealing $2 million of drug money?",
        choices:["The Ballad of Buster Scruggs", "The Hudsucker Proxy", "Suburbicon", "No Country for Old Men"],
        correctAnswer: 3,
        image: ("assets/images/nocountry.jpg") 
        }, {
        question: "In which Coen Brothers film is a bowling-obsessed slacker mistaken for a millionaire that shares his name?",
        choices:["True Grit", "The Big Lebowski", "Crimewave", "The Man Who Wasn't There"],
        correctAnswer: 1,
        image: ("assets/images/lebowski.jpg")
        }, {
        question:"In Barton Fink (1991), John Goodman's character reveals himself to be a famous serial killer named what?",
        choices:["Mad Dog Marzen", "Mac the Monster", "Maniac Miller", "Madman Mundt"],
        correctAnswer: 3,
        image: ("assets/images/barton.jpg")
        }, {
        question:"In Burn After Reading (2008), Brad Pitt's character believes that he stumbles on top secret government intelligence. What does it turn out that he is actually reading?",
        choices:["Memoirs", "Phone records", "Expense reports", "Javascript code"],
        correctAnswer: 0,
        image: ("assets/images/burnafter.gif")
        }, {
        question: "O Brother, Where Art Thou? (2000) is the Coen Brothers Depression-era take on which famous story?",
        choices: ["The Iliad", "The Odyssey", "Heracles (Twelve Labors)", "Myth of Sisyphus"],
        correctAnswer: 1,
        image: ("assets/images/obrother.jpg")
        }, {
        question: "What is the Coen Brothers top grossing film?",
        choices: ["The Big Lebowski", "No Country for Old Men", "True Grit", "Fargo"],
        correctAnswer: 2,
        image: ("assets/images/truegrit.jpg")
        }, {
        question: "Which of the following major Hollywood actors/actresses has never appeared in a Coen Brothers film?",
        choices: ["William H Macy", "John Turturro", "Christian Bale", "Paul Newman"],
        correctAnswer: 2,
        image: ("assets/images/bale.jpg")
        }
    ]

    var gameStarted = false;
    var questionNum = 0;
    var numberRight = 0;
    var numberWrong = 0;
    var timeRemaining;
    
//Start game -- Set gameStarted to true
    $('.startButton').click(function() {
        gameStarted = true;
        timeRemaining = 10;
        console.log(gameStarted);
        generateQuestion()
        setInterval(countDown, 1000);
    });

    function countDown() {
        timeRemaining--;
        console.log(timeRemaining);
        $('.timer').text("Timer: " + timeRemaining);
        var indexCorrectAnswer = questionBank[questionNum].correctAnswer;
        if (timeRemaining == 0) {
            console.log("TIMES UP");
            $('.container').empty()
            $('.container').append("<div id=incorrect></div>", "<img src=" + questionBank[questionNum].image + ">", "<div id=wrongAnswer></div>");
            $('#incorrect').text("TIME'S UP!");
            $('#wrongAnswer').text(questionBank[questionNum].choices[indexCorrectAnswer]);
            numberWrong++;
            questionNum++;
            setTimeout(generateQuestion, 3000);
            timeRemaining = 13;                
        }
    }

    function generateQuestion() {
        if(questionNum < questionBank.length) {
            $('.container').empty()
    //Replace .gameTitle with .question and pass in question from first questionBank object
            $('.container').append("<div class=question></div>");
            $('.question').text(questionBank[questionNum].question);
    //4 .answer divs and pass in text from each string in questionBank[].choices -- for loop
            for(var i = 0; i < questionBank[questionNum].choices.length; i++) {
                $('.container').append("<div class=answer>" + questionBank[questionNum].choices[i] + "</div>");
            }
            $('.container').append("<div class=timer>Timer: "+ timeRemaining +"</div>")
        } else if (questionNum === questionBank.length) {
                endGame();
        }
            $('.answer').click(function(event) {
                var indexCorrectAnswer = questionBank[questionNum].correctAnswer;
                if($(this).text() === (questionBank[questionNum].choices[indexCorrectAnswer])) {
                // This if statement is identifying the text of "this" -> (target of click event). It then compares it to the text of -> (choices @ index of CorrectAnswer of questionBank object @ questionNum)
                    $('.container').empty();
                    $('.container').append("<div id=correct></div>", "<img src=" + questionBank[questionNum].image + ">", "<div id=rightAnswer></div>");
                    $('#correct').text('Correct!');
                    $('#rightAnswer').text(questionBank[questionNum].choices[indexCorrectAnswer]);
                    questionNum++;
                    numberRight++;
                    setTimeout(generateQuestion, 3000);
                    timeRemaining = 13;
                } else {
                    $('.container').empty();
                    $('.container').append("<div id=incorrect></div>", "<img src=" + questionBank[questionNum].image + ">", "<div id=wrongAnswer></div>");
                    $('#incorrect').text('Incorrect :(');
                    $('#wrongAnswer').text(questionBank[questionNum].choices[indexCorrectAnswer]);
                    numberWrong++;
                    questionNum++;
                    setTimeout(generateQuestion, 3000)
                    timeRemaining = 13;
                }
            })
        }

        function endGame () {
            clearInterval(countDown)
            $('.container').empty();
            $('.container').append("<div id=totCorrect>Total Correct: " + numberRight + "</div>", "<div id=totIncorrect>Total Incorrect: " + numberWrong + "</div>", "<button type=button class=startButton>Try Again</button>");
            gameStarted = false;
            questionNum = 0;
            numberRight = 0;
            numberWrong = 0;
            timeRemaining = null;
         }

});


















