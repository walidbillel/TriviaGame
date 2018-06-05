
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

var score = 0;
var tps = 30;
var intervalId;
var start = $("#start");
var questionplace = $("#question");
var options = $("#options");
var opt1 = $("#opt1"); 
var opt2 = $("#opt2"); 
var opt3 = $("#opt3"); 
var opt4 = $("#opt4"); 
var result = $("#result");
var totQuest = questions.length;

// building the time here
start.on("click", runTime);

function runTime() {
  
  intervalId = setInterval(decrementTime, 2000);
}

function decrementTime(){
  
  tps--;
  $("#time").html("<h4>" + "Time Remaining: " + tps + "</h4>");
  $("#start").hide();
  $("#next-question").show();
  
  if (tps == 0) {

    clearInterval(intervalId);
    $("#time").html("<h4>" + "Time Over, Next question" + "</h4>");
    loadNextQuest();
    

  } else {
    loadQuest();
  }
}


// Now I want to bulid my quizs out of the questions array
function loadQuest () {

  var i =0; 
  i < totQuest;
  i++;
    questionplace.html(questions[i].question);
    opt1.html(questions[i].option1);
    opt2.html(questions[i].option2);
    opt3.html(questions[i].option3);
    opt4.html(questions[i].option4);
  
}

function loadNextQuest () {

  var i =0; 
  i < totQuest;
  i++;
  
    console.log(questions[i]);
    questionplace.html(questions[i].question);
    opt1.html(questions[i].option1);
    opt2.html(questions[i].option2);
    opt3.html(questions[i].option3);
    opt4.html(questions[i].option4);

}

$("#next-question").on("click", loadNextQuest);




// I want to loop over the questions and display one

 