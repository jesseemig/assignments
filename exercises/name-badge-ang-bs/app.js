var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function($scope) {
   
 $scope.addName = function() {
        $scope.badge = $scope.person;
        $scope.person = {};
    }
    
}]);


