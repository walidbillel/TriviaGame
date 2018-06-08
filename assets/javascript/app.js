
$(document).ready(function() {



//  here we put our questions and correct answers as an array of objects
var questions = [{
  question: "What does the acronym for the German multinational company BMW stand for?",
  option1: "Bowing Made Weke",
  option2: "Bavarian Motor Works",
  option3: "Billing Motors Wild",
  option4: "Berbbery Mild Wind",
  answer: 2
},
{
  question: "The vehicle manufacturer Volvo was founded in what country?",
  option1: "Germany",
  option2: "Switserland",
  option3: "Danemark",
  option4: "Sweden",
  answer: 4
},
{
  question: "The first generation of the Chevrolet Corvette was introduced in what year?",
  option1: "1962",
  option2: "1975",
  option3: "1953",
  option4: "1936",
  answer: 3
},
{
  question: "What was the first Japanese car to be produced in the United States?",
  option1: "Honda Accord",
  option2: "Mazda Miata",
  option3: "Toyota Camrey",
  option4: "Nissan Maxima",
  answer: 1
},
{
  question: " How much horse power did the first Porsche 911 have?",
  option1: "30 HP",
  option2: "80 HP",
  option3: "130 HP",
  option4: "180 HP",
  answer: 1
}
];

// Creating my variables for the game
// This variable will be used to load the question
var i = 0;

// This one will be the score
var rightAns = 0;
var wrongAns = 0;
// Set my time to 30sec
var tps = 15;

// interval 
var intervalId;
// Getting the DOM elements
var startBtn = $("#startBtn");
var startFace = $("#start-facade")
var nextQuest = $("#next-question");
var time = $("#time");
var questionplace = $("#question");
var options = $("#options");
var opt1 = $("#opt1"); 
var opt2 = $("#opt2"); 
var opt3 = $("#opt3"); 
var opt4 = $("#opt4"); 
var result = $("#result");
var tryAgain = $("#try-again");
var correctAns = "";
var incorrectAns = "";

// Set this to ease the process
var totQuest = questions.length;
questionplace.hide();
options.hide();

// building the time here
// When the start button is pressed I start my game


// function to run the time and decrt. 
function runTime() {
  tps = 15;
  time.html("<h4>" + "Time Remaining: " + tps + "</h4>");
  intervalId = setInterval(decrementTime, 1000);
}

// This function will decrement the time 
function decrementTime(){
  
  // decreamenting the time
  tps--;
  // generating the time 
  time.html("<h4>" + "Time Remaining: " + tps + "</h4>");
 
  
  if (tps === 0) {
    clearInterval(intervalId);
    loadNextQuest();
  }

  if (tps === 0 && i >= totQuest) {
    endGame();
  }
}

// This will push the question to the web page
function pushQuest() {
  questionplace.show();
  options.show();
  startFace.hide();
  startBtn.hide();
  nextQuest.show();
  loadQuest();
}

  


// Loading the quetion
function loadQuest () {

    questionplace.html(questions[i].question);
    opt1.html(questions[i].option1);
    opt2.html(questions[i].option2);
    opt3.html(questions[i].option3);
    opt4.html(questions[i].option4);
    correctAns = questions[i].answer;
    
  
}

// loading the next question

function loadNextQuest () {

   if(i <= totQuest)  {
    i++;
   }
    // console.log(i);
    if(i >= totQuest) {
      endGame();
    } else {
      questionplace.html(questions[i].question);
      // console.log(questions);
      opt1.html(questions[i].option1);
      opt2.html(questions[i].option2);
      opt3.html(questions[i].option3);
      opt4.html(questions[i].option4);
      correctAns = questions[i].answer;
      clearInterval(intervalId);
      runTime();
      // checkAnswer(); will be exc.
   } 
}

// ending the game and showing the results
function endGame() {
  nextQuest.hide();
  time.hide();
  questionplace.hide();
  options.hide();
  result.show();
  $("hr").hide();
  tryAgain.show();
}

 
// check the user input and and to the results 

function checkSelectedOpt() {
  var optionClicked = $(this).attr("id");
  console.log(optionClicked);
  if (optionClicked == correctAns) {
    rightAns++;
    var rightDiv = $("<p>")
    rightDiv.append("Right Answers " + rightAns);
    result.html(rightDiv);
    loadNextQuest();
    
  } else if(optionClicked !== correctAns) {
    wrongAns++;
    var wrongDiv = $("<p>")
    wrongDiv.append("Wrong Answers " + wrongAns);
    result.html(wrongDiv);
    loadNextQuest();
  } else {
    endGame();
  }
}

// reset the game and start over

function reset() {
  i = 0;
  rightAns = 0;
  wrongAns = 0;
  pushQuest();
  tryAgain.hide();
  result.hide();
  time.show()
}


// even handler on click events

startBtn.on("click", runTime);
startBtn.on("click", pushQuest);
nextQuest.on("click", loadNextQuest);
$(".option").on("click", checkSelectedOpt);

tryAgain.on("click", reset);

});





 