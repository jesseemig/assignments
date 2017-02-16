var wishPage = angular.module("routingApp");

wishPage.controller("wishlistController", ["$scope", function ($scope) {
    $scope.gadgets1 = [
         "Drone2",   
        "Fitbit2",
        "GoPro2",
        "Galaxy S72"
    ];
}]);

