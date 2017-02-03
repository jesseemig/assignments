var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function($scope, $http) {
    
    $http.get("http://api.vschool.io/jesseemig/todo/[xxxxxxx]n").then(function(response) {
        $scope.todos = response.dat;
    });
    $scope.removeItem = function(todo, index) {
        $http.delete( api  dsfjdfdsj)
    }
    
    
    
}])