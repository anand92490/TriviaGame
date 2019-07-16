console.log($);


var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;


var quizQuestions = [
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

    {   questions:"What is the capital city of Australia?",
        choices:["Sydney", "Perth", "Melbourne", "Canberra"],
        correctAnswer:"Canberra"
    },];

// console.log(quizQuestions);

  //display the questions in the browser.

  function loadquestion(){
      var question =   quizQuestions[currentQuestion].questions;
      var choices =   quizQuestions[currentQuestion].choices;
    $("#time").html('Time Remaining :' + counter);
      $("#game").html(`<h4>${question}</h4> ${loadChoices(choices)}`);
    }

    function loadChoices(choices){
         var result = '';
         for(var i = 0; i < choices.length; i ++){
             result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
         }

         return result;
    }

    loadquestion(); 
 