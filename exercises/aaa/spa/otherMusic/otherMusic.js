var otherMusic = angular.module("routingApp")

otherMusic.controller("otherMusicController", ["$scope", "$http",  function ($scope, $http) {

    var discover = [];

    $scope.findNew = function (input) {

        $http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + input + "&api_key=f791d04f1c27bb4d53ffa4f72495f539&format=json").then(function (response) {
            console.log(response.data);
            discover = (response.data);
            console.log(discover);
            $scope.artistFound = discover;
            

        });
    };


}]);