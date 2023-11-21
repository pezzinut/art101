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
    // Add a click event listener to all buttons with class 'toggleButton'
    $(".toggleButton").on("click", function(){
        // Toggle the 'special' class on the parent section of the clicked button
        $(this).parent().toggleClass("special");
    });
});


