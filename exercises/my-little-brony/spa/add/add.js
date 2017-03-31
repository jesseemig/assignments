var add = angular.module("routingApp")

add.controller("AddController", ["$scope", "PonyService", function ($scope, PonyService) {

    $scope.newPony = [];

    $scope.addPony = function (upload) {

        PonyService.addUpload(upload);
    }

}])
