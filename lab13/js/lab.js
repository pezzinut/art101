//lab 13: Loops
// JQUERY MUST BE LOADED FOR SCRIPT TO WORK
//AUTHOR: SYDNEY KIM
//DATE : NOVEMBER 2023

// fizzbuzz function
function fizzbuzz() {
    var oneLongString = "";
  
    for (num = 1; num <= 200; num++) {
      var output = "";
  
      if (num % 3 === 0) {
        output += "Fizz";
      }
  
      if (num % 5 === 0) {
        output += "Buzz";
      }
  
      if (num % 7 === 0) {
        output += "Boom";
      }
  
      if (output === "") {
        output = num;
      }
  
      oneLongString += output + " ";
    }
  
    // Output the string after the loop
    $("#output").html(oneLongString);
  }
  
  // Call the function
  fizzbuzz();
 