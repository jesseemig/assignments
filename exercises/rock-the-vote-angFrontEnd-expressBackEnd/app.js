angular.module("MyApp", [])

.controller("MainController", ["$scope", "$http", "voteService", function ($scope, $http, voteService) {

    $scope.postToAdd = [];

    $scope.upCount = voteService.upvotes;

    $scope.downCount = voteService.downvotes;

    $scope.comments = [];
    

    $scope.submitPost = function () {
        $scope.postToAdd.push($scope.submit)
        $scope.submit = {};
    };



    $scope.upvoted = function (index) {

        $scope.upCount = voteService.increment();
    };



    $scope.downvoted = function () {

        $scope.downCount = voteService.decrement();
    }

    
    $scope.submitComment = function () {
        $scope.userComment.push(comments);
    }
    
}]);