var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    
    $scope.entered = []
    
    $scope.produce = function() {
        $scope.entered.push($scope.upload)
        $scope.upload = {};
    }
}]);

