//lab 12
// JQUERY MUST BE LOADED FOR SCRIPT TO WORK
//AUTHOR: SYDNEY KIM
//DATE : NOVEMBER 2023

function sortingHat() { 
    var length = str.length;
    var mod = length % 4;
    if (mod == 0) {
        return "Gryffindor" + "Traits : brave, daring, courageous, determined"
    }
    else if (mod == 1) {
        return "Ravenclaw" + "Traits : wise, witty, innovative, academic"
    }
    else if (mod == 2) {
        return "Slytherin" + "Traits:  shrewd, prideful, closed off"
    }
    else if (mod == 3) {
        return "Hufflepuff" + "Traits:  trustworthy, humble, hardworking, loyal"
    }
}

//this is the click listener for the button

$("#button").on("click", function (){ 

//this is to get the value of the input
var name = document.getElementById("input").value;

//function, store result in variable
var house= sortingHat (name);

//append a div to our new outut div

$("#output").append('<div class="text"><p>'+ "The sorting hat has sorted you into"  + house + '</p></div>')

});
    

