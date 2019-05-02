//Create var to hold questions

$(document).ready(function() { 

//Create global variables for gameplay    
    var questionBank = [{
        
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
        choices:["[John Malkovich]'s memoirs", "[George Clooney]'s phone records", "[Frances McDormand]'s expense reports", "[JK Simmons] javascript code"],
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
    var timerRemaining = 20;
    
//Start game -- Set gameStarted to true
    $('.startButton').click(function() {
        gameStarted = true;
        console.log(gameStarted);
//Clear container div
        generateQuestion()
    });

    function generateQuestion () {
    $('.container').empty()
    //Replace .gameTitle with .question and pass in question from first questionBank object
            $('.container').append("<div class=question></div>");
            $('.question').text(questionBank[questionNum].question);
    //4 .answer divs and pass in text from each string in questionBank[].choices -- for loop
            for(var i = 0; i < questionBank[questionNum].choices.length; i++) {
                $('.container').append("<div class=answer>" + questionBank[questionNum].choices[i] + "</div>");
            }
            $('.answer').click(function() {
                questionNum++;
                generateQuestion();
                console.log(questionNum);
            })
    // $('.answer').click(function() {
    //     questionNum++;
    //     console.log(questionNum)
    // })

//Add 1 to questionNum for each .answer click
    }
})



















