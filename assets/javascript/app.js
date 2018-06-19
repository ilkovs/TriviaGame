var myQuestions = [{
    question: "What is the diameter of the Earth ?",
    choices: ["2500 miles", "5000 miles", "6500 miles", "8000 miles"],
    correctAnswer: 3
},

{
    question: "Which country is Prague in ?",
    choices: ["Slovakia", "Slovenia", "Poland", "Czech Republic"],
    correctAnswer: 3
},

{
    question: "Wnat color is a Welsh poppy ?",
    choices: ["blue", "red", "yellow", "green"],
    correctAnswer: 2
},

{
    question: "Which sport does Constantino Rocca play ?",
    choices: ["Golf", "Tennis", "Bowling", "Basketball"],
    correctAnswer: 0
},

{
    question: "How many valves does a trumpet have ?",
    choices: ["One", "Two", "Three", "Four"],
    correctAnswer: 2
},

{
    question: "When did the Cold War end ?",
    choices: ["1975", "1980", "1989", "1991"],
    correctAnswer: 2
},

{
    question: "When was the euro introduced as legal currency on the world market ?",
    choices: ["1999", "2003", "1993", "1988"],
    correctAnswer: 0
},

{
    question: "What colour is Absynthe ?",
    choices: ["red", "blue", "green", "yellow"],
    correctAnswer: 2
},

{
    question: "What year did Margaret Thatcher become Prime Minister of England ?",
    choices: ["1979", "1982", "1995", "1965"],
    correctAnswer: 0
},

{
    question: "How many times was the Men's Tennis Singles at Wimbledon won by Bjorn Borg ?",
    choices: ["Three", "Five", "Seven", "Ten"],
    correctAnswer: 1
},
];

var currentQ = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQ = 0;
var counter = 60;
var theClock;
var gameHTML;

$(document).ready(function () {
$("#start").on("click", function () {
    $(".start").hide();
    sound.play();
    
        $("#main").main({
            max: allQuestions.length,
            value: 0
        });
    });
    
function setupQuestions() {
    $("#main").html(parseInt(currentQ) + 1 + ". " + myQuestions[currentQ].question);
    var myQuestions = allQuestions[currentQ].choices;
    for (var i = 0; i < myQuestions.length; i++) {
        formHTML += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + myQuestions[currentQ].choices[i] + '</label></div><br/>';
    }
};

function checkAnswers() {
    if ($("input[name=option]:checked").val() == myQuestions[currentQ].correctAnswer) {
        correctAnswers++;
    };
};

function timerWrapper() {
	theClock = setInterval(sixtySeconds, 1000);
	function sixtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function generateLossDueToTimeOut() {
	unansweredQ++;
	$("#time").append(counter);
	$("#time").html(gameHTML);
	setTimeout(wait, 4000);
}


   setupQuestions();
   checkAnswers();
   $("#main").html("You answered correctly " + correctAnswers + " out of 10 questions! ");
   $("#main").html("You answered wrong to " + incorrectAnswers + " out of 10 questions! ");

function resetGame() {
	questionCounter = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unansweredQ = 0;
	counter = 60;
	generateHTML();
	timerWrapper();
}

resetGame();

});




