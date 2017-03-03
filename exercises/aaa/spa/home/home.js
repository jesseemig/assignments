var home = angular.module("routingApp")

home.controller("HomeController", ["$scope", "$http",  function ($scope, $http) {

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
            console.log($scope.newSongs, "old song")
         $scope.playlist.push(response.data);
               console.log($scope.playlist);
            })
            
    };
    
    $scope.newlyAdded = [];

    $scope.displayList = function (song, album, title, newList) {
        $http.get("/playlist").then(function (response) {
            $scope.beingAdded = response.data;
            $scope.addingSong = response.data;
            console.log($scope.addingSong, "New song")
         $scope.newlyAdded.push(response.data);
                console.log(response.data)
        })
    }


}]);