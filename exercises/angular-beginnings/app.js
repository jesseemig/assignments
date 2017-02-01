var app = angular.module("MyApp", []);

app.controller("MainController", function($scope) {
    
    $scope.car = {
        make: "Toyota",
        model: "Prius",
        color: "Blue",
        year: 2007
    };
});
