console.log("JS Loaded");
$.ajax({
    //API urll
    url: "https://api.nasa.gov/planetary/apod",
    type:"GET",
    //data type we want to get back
    dataType: "json",
        //success func
        success: function(data) {
            console.log(data);
        }
        
})