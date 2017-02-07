var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    
$scope.newPoke = []

   
 $scope.addPoke = function () {
        $scope.newPoke.push($scope.pokeEntered)
        $scope.pokeEntered = {};
    }
    
}]);


