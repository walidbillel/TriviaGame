
//  here we put our questions and correct answers as an array of objects
var questions = [{
  question: "What does the acronym for the German multinational company BMW stand for?",
  option1: "Bowing Made Weke",
  option2: "Bavarian Motor Works (Bayerische Motoren Werke)",
  option3: "Billing Motors Wild",
  option4: "BMW",
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
}];

// Creating my variables for the game
// This variable will be used to load the question
var i = 0;

// This one will be the score
var rightAns = 0;
var wrongAns = 0;
// Set my time to 30sec
var tps = 30;

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
var correctAns = "";

// Set this to ease the process
var totQuest = questions.length;
questionplace.hide();
options.hide();

// building the time here
// When the start button is pressed I start my game


// function to run the time and decrt. 
function runTime() {
  tps = 30;
  time.html("<h4>" + "Time Remaining: " + tps + "</h4>");
  intervalId = setInterval(decrementTime, 2000);
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
}

// This will load the question and play with html(changing btns, hiding and showing elemnts)
function pushQuest() {
  questionplace.show();
  options.show();
  startFace.hide();
  startBtn.hide();
  nextQuest.show();
  loadQuest();
  checkAnswer();
}

  


// Now I want to bulid my question out of the questions array
function loadQuest () {

    questionplace.html(questions[i].question);
    opt1.html(questions[i].option1);
    opt2.html(questions[i].option2);
    opt3.html(questions[i].option3);
    opt4.html(questions[i].option4);
    correctAns = questions[i].answer;
    // checkAnswer();
  
}

function loadNextQuest () {

 if(i < totQuest)  {
  i++;
    questionplace.html(questions[i].question);
    console.log(question);
    opt1.html(questions[i].option1);
    opt2.html(questions[i].option2);
    opt3.html(questions[i].option3);
    opt4.html(questions[i].option4);
    correctAns = questions[i].answer;
    clearInterval(intervalId);
    runTime();
    // checkAnswer(); will be exc.
 } 
 
//  I tried else and else if both with playing on opertors but ended up getting the same
// resut (error then this happens after another click)
 if (i === totQuest) {
  //  Game over 
  nextQuest.html("Try Again");
  questionplace.hide();
  options.hide();
  time.hide();
  result.show();
  $("hr").hide();
 }
 
}

function checkAnswer() {

  // Im stuck with where to begin with....I cant get the radio btns to select only one
  // then I'm thinking something about grabing the value and comparing it with the object answer
  // if they match then righttAns++ / dont match wrongAns++

}

startBtn.on("click", runTime);
startBtn.on("click", pushQuest);
nextQuest.on("click", loadNextQuest);




// I want to loop over the questions and display one

 