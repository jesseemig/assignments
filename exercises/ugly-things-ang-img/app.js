var app = angular.module("MyApp", []);

app.controller("UploadController", ["$scope", function ($scope) {
   
 $scope.addPic = function () {
        $scope.tada = $scope.pic;
        $scope.pic = {};
    };
    
}]);




