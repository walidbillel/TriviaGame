
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

var wins = 0;
var losses = 0;
var tps = 30;
var intervalId;




// Just building the time here
$("#start").on("click", runTime);

function runTime() {
  
  intervalId = setInterval(decrementTime, 2000);
}

function decrementTime(){
  
  tps--;
  $("#time").html("<h5>" + "Time Remaining: " + tps + "</h5>");
  $("#start").hide();
  $("#next-question").show();
  

  if (tps === 0) {

    clearInterval(intervalId);
    $("#time").html("<h5>" + "Game Over" + "</h5>");
  }
}



// Now I want to bulid my quizs out of the questions array


 