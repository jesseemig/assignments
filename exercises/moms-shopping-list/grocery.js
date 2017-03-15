var app = angular.module("MyApp", []);

app.controller("UploadController", ["$scope", function ($scope) {

    $scope.listArray = []

    $scope.adding = function () {
        $scope.listArray.push($scope.item)
        $scope.item = {};
    }

}]);
;