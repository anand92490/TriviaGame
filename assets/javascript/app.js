
var counter = 30;
var theQuestion = 0;
var score = 0;
var rightAnswer = 0;
var wrongAnswer = 0;
var timer;


var funFacts = [
    {
        questions:"What is the fastest aircraft in the world?",
        choices:["Lockheed SR-71 Blackbird", "Lockheed YF-12","North American X-15", "Mikoyan MiG-25 Foxbat",],
        correctAnswer: "North American X-15"
    },

    {
        questions:"What is the most spoken language in the world?",
        choices:["Arabic", "Chinese", "English", "Spanish"],
        correctAnswer:"Chinese"
    },

    {
        questions:"What is the best selling car in the United States?",
        choices:["Toyota Camry", "Honda Civic","Ford - F series","Toyota Rav-4"],
        correctAnswer:"Ford - F series"
    },

    {
        questions:"What is the richest U.S state in 2019 by medain household income?",
        choices:["California", "Texas", "Maryland", "New York" ],
        correctAnswer:"Maryland"
    },
]

$(document).ready(function displayQuestion(){

   var questions = funFacts[theQuestion].questions;
   var choices = funFacts[theQuestion].choices;
$('#time').html('Time remaining : ' + counter);
$('#main').html('<h5>' + questions + '</h5>');

});  

function displayChoces(choices){
    var result = '';
    for (var i = 0; i < choices.length; i++);

}
displayQuestion(); 
