var home = angular.module("routingApp")

home.controller("HomeController", ["$scope", function ($scope) {

    $scope.remove = function (index) {
        PonyService.removePony(upload);

    }

}])
