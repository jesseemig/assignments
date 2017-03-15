var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    
    
    $scope.todos = []

    $scope.upload = function (add) {
        $scope.todos.push($scope.add)
        $scope.add = {};
    };
    
    

    $scope.remove = function (index) {
        $scope.todos.splice(index, 1);
    };

}]);


