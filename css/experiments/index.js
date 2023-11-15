$("#my-button").click(function(){
    console.log("Button clicked!"); 
    var name= prompt("What is your name?");
    console.log("prompt returned : " + name );
    newText = "Hello" + name +"!";
    $("#title").html(newText); 
});

