// Lab 6
// Author: Sydney Kim
// Date: October 29 2023

// Define Variables 
myTransport = ["bus", "walking", "bike", "Toyota camry"]

// create an object for main ride
myMainRide = {
  make : "Toyota" ,
  model : "Camry" ,
  year : 2022 ,
  color : "Black" ,
}


//output
document.writeIn("Getting around: "  , myTransport, "<br>");
// write object to document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");