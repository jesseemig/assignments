var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "PokeService", function ($scope, PokeService) {


    
    $scope.newPokemon = []

    $scope.addPoke = function (pokeEntered, newPokemon) {
        
        
        PokeService.added(pokeEntered)
        $scope.newPokemon = PokeService.newPokemon;
        $scope.pokeEntered = {}
    }


}]);



