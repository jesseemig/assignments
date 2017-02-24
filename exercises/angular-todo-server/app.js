var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    $scope.todos = []

    $scope.upload = function () {
        $scope.todos.push($scope.add)
        $scope.add = {};
    }
    

    $scope.remove = function (thing) {
        $scope.add.splice($scope.todos.indexOf(thing), 1) ;
    }



  }]);


