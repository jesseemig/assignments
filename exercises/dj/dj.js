
var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", function ($scope) {
    console.log("bitchin");
    if ($scope.item > 1) {
        console.log("bitchin");
    }

}])
