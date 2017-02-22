var app = angular.module("MyApp", [])

app.controller("MainController", ["$http", "$scope", "BountyService", function ($http, $scope, BountyService) {

        $scope.bounties = [];
    
        $scope.person = {};
    
    $http.get("http://localhost:8150/bounty")
    .then(function (response) {
        var wanted = (response.data)
        $scope.bounties = wanted;
    });


    $scope.addPerson = function (person, bounties) {
        
        BountyService.Caught(person);
        $scope.bounties = BountyService.bounties;
        $scope.person = {};

    };

}]);



 