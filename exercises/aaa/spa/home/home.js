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



    $scope.playlist = [];




    $scope.addSong = function (index, artist, name, albumn, title, playlist, newSong) {
        console.log($scope.output.data[index]);
        $http.post("/playlist", $scope.output.data[index]).then(function (response) {
            $scope.newSongs = response.data;
            console.log($scope.newSong, "New song")
         $scope.playlist.push(response.data);
                console.log(response.data)
                // playlist = (response.data)
                //  $scope.newSong = playlist;
            })
            // $scope.playlist.push($scope.output.data[index]);
            //    playlist = ($scope.output.data[index].artist.name) + ($scope.output.data[index].title) + ($scope.output.data[index].album.title);
            //    console.log(playlist).then
    }



}]);