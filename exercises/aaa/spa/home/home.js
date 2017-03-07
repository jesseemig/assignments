var home = angular.module("routingApp")

home.controller("HomeController", ["$scope", "$http",  function ($scope, $http) {


    var songs = [];

    $scope.findArtist = function (input) {

        $http.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + input + "&api_key=f791d04f1c27bb4d53ffa4f72495f539&format=json").then(function (response) {
            console.log(response.data);
            songs = (response.data);
            $scope.output = songs;
            console.log($scope.output.toptracks);

        });
    };



    $scope.playlist = [];




    $scope.addSong = function (index, artist, name, albumn, title, playlist, newSongs) {
        console.log($scope.output.toptracks.track[index]);
        $http.post("/playlist", $scope.output.toptracks.track[index]).then(function (response) {
            console.log(response.data);
            $scope.newSongs = response.data;
            console.log($scope.newSongs, "old song")
         $scope.playlist.push($scope.newSongs);
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