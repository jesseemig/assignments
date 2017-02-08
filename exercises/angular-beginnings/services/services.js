angular.module("MyApp")

.service("PokeService", [function (newPokemon, pokeEntered) {

    this.newPokemon = [];
    this.pokeEntered = {};
    
    this.added = function (pokeEntered, newPokemon) {
        
        this.newPokemon.push(pokeEntered)
        
    };

}]);

