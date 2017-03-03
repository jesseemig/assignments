var otherMusic = angular.module("routingApp")

otherMusic.controller("otherMusicController", ["$scope", "$http",  function ($scope, $http) {

    var config = {
        headers: {
            "X-Mashape-Key": "Yx3ZIrcwZimshJB0uwTc7hb0VcUWp1DclwljsnudTovyVpzPe0"
        }
    };

    var discover = [];

    $scope.findNew = function (input) {

        $http.get("https://sridurgayadav-chart-lyrics-v1.p.mashape.com/apiv1.asmx/SearchLyricDirect?artist=" + input, config).then(function (response) {
            console.log(response.body);
            discover = (response.data);
            console.log(discover);
            $scope.genreFound = discover;

        });
    };


}]);
