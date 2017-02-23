var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "CartoonService", function ($scope, CartoonService) {
    
    $scope.newCartoon = [];
    
    $scope.addCartoon = function (upload, newCartoon) {
        
        CartoonService.displayCartoon(upload);
        $scope.newCartoon.push($scope.upload)
        $scope.upload = {};
    };
 
    
}]);
