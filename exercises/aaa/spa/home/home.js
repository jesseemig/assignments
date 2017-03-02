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



    var playlist = [];




    $scope.addSong = function (index, artist, name, albumn, title, playlist, newSong) {
 
        $http.post("localhost:8000/playlist", $scope.output.data[index].artist.name, $scope.output.data[index].title, $scope.output.data[index].album.title).then(function (response) {
            console.log(response.data)
            // playlist = (response.data)
          //  $scope.newSong = playlist;
        })
       // $scope.playlist.push($scope.output.data[index]);
        //    playlist = ($scope.output.data[index].artist.name) + ($scope.output.data[index].title) + ($scope.output.data[index].album.title);
        //    console.log(playlist).then
    }



}]);