// index.js - Lab 7: Functions
// Author: Sydney Kim
// Date: Novemeber 1 2023
// Code credit :Wes Modes


function sortUserName() {
    var userName = window.prompt("Please enter your username!");
    console.log("userName = ", userName);
    
    // Remove spaces from the user input
    userName = userName.replace(/\s/g, '');

    // Split the modified string to an array
    var nameArray = userName.split('');

    // Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    // Join the array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}


// output
document.writeIn ("I think this name suits you better: " , 
    sortUserName(), "</br>");