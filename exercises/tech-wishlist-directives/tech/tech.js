angular.module("routingApp.techView", ["ngRoute"])

.config(function ($routeProvider) {
        $routeProvider.when("/tech", {
        templateUrl: "tech/tech.html",
        controller: "techController"
    });
})

.controller("techController", ["$scope", function($scope) {
    $scope.gadgets = [
        {
        pic: "https://images-na.ssl-images-amazon.com/images/I/51OD9mfgYIL._AC_US160_.jpg",
            name: "Samsung 4K Ultra HD TV",
            price: "$1579.00"
        },
        {
        pic: "https://images-na.ssl-images-amazon.com/images/I/51eASFsQ1YL._AC_US160_.jpg",
        name: "MacBook Pro",
        price: "$1304.00"
        },
        {
        pic: "https://images-na.ssl-images-amazon.com/images/I/51Jv813HYkL._AC_US160_.jpg",
        name: "Canon EOS Rebel",
        price: "$360.00"
        }
    ];
}]);

