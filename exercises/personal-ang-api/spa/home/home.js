var home = angular.module("routingApp")

home.controller("HomeController", ["$scope", "$http", function ($scope, $http) {
   
     var config = {
        headers: {"X-Mashape-Key":
                 "Yx3ZIrcwZimshJB0uwTc7hb0VcUWp1DclwljsnudTovyVpzPe0"
                }
    };

     $scope.findPh = function (input) {

     $http.get("https://cosmin-us-phone-number-lookup.p.mashape.com/get.php?phone=" + input, config).then(function (response) {
         
         console.log(response.data);
         var info = response.data;
         $scope.output = info;
        })
     };

    
}]);
 