console.log("JS Loaded");
$.ajax({
    //API urll
    url: "https://pokeapi.co/api/v2/pokemon/137/",
    type:"GET",
    //data type we want to get back
    dataType: "json",
        //success func
        success: function(data) {
            console.log(data);
        }
        
})