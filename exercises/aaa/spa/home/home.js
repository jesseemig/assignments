var home = angular.module("routingApp")

home.controller("HomeController", ["$scope", "$http", function ($scope, $http) {

    var config = {
        headers: {
            "X-Mashape-Key": "Yx3ZIrcwZimshJB0uwTc7hb0VcUWp1DclwljsnudTovyVpzPe0"
        }
    };

    var songs = [];
    
    $scope.findArtist = function (input) {

        $http.get("https://deezerdevs-deezer.p.mashape.com/search?q=" + input, config).then(function (response) {
            console.log(response.data)
           songs = (response.data)
            $scope.output = songs;

        })
    };

    
  

}]);