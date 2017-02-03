angular.module("MyApp", [])

.controller("MainController", ["$scope", "$http", function($scope, $http) {
    $http.get("http://api.vschool.io:6543/hitlist.json")
        .then(function (response) {
            console.log(response.data);
        var hitlist = (response.data)
        $scope.lists = hitlist;
    });  
}]);
         
             



    