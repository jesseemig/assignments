var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "cartoonService", function ($scope, cartoonService) {
    
    $scope.newCartoon = [];
    
    $scope.upload = {};
    
    $scope.addCartoon = function (upload, newCartoon) {
        
        cartoonService.displayCartoon(upload);
        $scope.newCartoon = cartoonService.newCartoon;
        $scope.upload = {};
        
    };
 
    
}]);