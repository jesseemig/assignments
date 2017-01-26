$.get("http://pokeapi.co/api/v1/pokedex/1/", function(data){
console.log(data.pokemon[0]);
    var pokemons = {};
    for (var i = 0; i < data.length; i++) {
        var name - data[i];
        if (pokemons[name] )
    }
});  

$(document).ready(function() {
    $("#btn").click(function() {
    $("#here").append("<p>Another paragraph</p>");              
});
}); 



    
  //  $.get("http://pokeapi.co/api/v1/pokedex/1/", function(data){
  //  console.log(data.pokemon[0]);
  //  }); 