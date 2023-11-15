// index.js - Lab 9: libraries and jQuery
// Author: Sydney Kim
// Date: Novemeber 15 2023
// Code credit :Wes Modes



//toggle for special css

$(document).ready(function(){
    // adding click event istener 
    $("#toggleButton").on("click", function(){
        $("#toggleDiv").toggleClass("special");
    });
});

$(document).ready(function(){

    // Append a button to the "challenge" section
    $("#challenge").append("<button id='challengeButton'>Challenge Button</button>");

    // Append a button to the "problems" section
    $("#problems").append("<button id='problemsButton'>Problems Button</button>");

    // Append a button to the "results" section
    $("#results").append("<button id='resultsButton'>Results Button</button>");

    // Add event listeners to the buttons
    $("#challengeButton").on("click", function(){
        alert("Challenge button clicked!");
        // Add more functionality as needed
    });

    $("#problemsButton").on("click", function(){
        alert("Problems button clicked!");
        // Add more functionality as needed
    });

    $("#resultsButton").on("click", function(){
        alert("Results button clicked!");
        // Add more functionality as needed
    });
});



