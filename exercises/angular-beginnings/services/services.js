angular.module("MyApp")

.service("PokeService", [function (newPokemon, pokeEntered) {

    this.newPokemon = []
    
    
    this.added = function (pokeEntered, newPokemon) {
        
        this.newPokemon.push(pokeEntered)
        this.pokeEntered = {};
    };

}]);

