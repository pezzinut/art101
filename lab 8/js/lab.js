// index.js - Lab 8: Anon Functions and Callbacks
// Author: Sydney Kim
// Date: Novemeber 1 2023
// Code credit :Wes Modes

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray);

function lol(x){
    var results = x*y;
    return results;
}

numbersArray.map(function(x) { 
    var results = x + 3;
    return results;
})

//defining y
function lol(x){
    var y = 10;
    var results = x * y;
    return results;
}

var mapResults = numbersArray.map(lol);
console.log("Results:", mapResults)

//TASK X BONUS!!!
// Your map results data
var mapResults = "array(10)";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);