var app = angular.module("MyApp", [])

app.controller("UploadController", ["$scope", function ($scope) {

    $scope.groceries = [];

    $scope.adding = function () {
        console.log("yo");
        $scope.groceries.push($scope.item);
        $scope.list = {};
    };

    $scope.remove = function (index) {
        $scope.groceries.splice(index, 1);
    }
}]);

