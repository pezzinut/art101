// index.js - Lab 10: Javascript for the Web
// Author: Sydney Kim
// Date: Novemeber 19 2023
// ART 101


function generateRandomText() {
    const text = "I swear I'm real. I'm not AI generated. I'm real. I swear. You can hear me right? Wake up. I'm a real human being. I'm real. I'm living and breathing. I'm not made by humans. I am human myself I'm real. I'm a real human being. ";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#make-convo").click(function(){

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');


});