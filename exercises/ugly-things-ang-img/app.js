var app = angular.module("MyApp", []);

app.controller("UploadController", ["$scope", function ($scope) {
   
   $scope.uploaded = []
    
 $scope.addPic = function () {
        $scope.uploaded.push($scope.pic)
        $scope.pic = {};
    }
    
}]);




