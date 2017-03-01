angular.module("MyApp", [])

.controller("MainController", ["$scope", "$http", function($scope, $http) {
    $http.get("http://swapi.co/api/films/1/")
        .then(function (response) {
        console.log(response.data);
        $scope.credits= (response.data.opening_crawl)
    });  
    
}]);


