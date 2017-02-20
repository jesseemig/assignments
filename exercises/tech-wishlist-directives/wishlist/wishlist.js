angular.module("routingApp.wishlistView", ["ngRoute"])

.config(function ($routeProvider) {
    $routeProvider
    .when("/wishlist", {
        templateUrl: "wishlist/wishlist.html",
        controller: "wishlistController"
    })
})

.controller("wishlistController", ["$scope", function ($scope) {
    $scope.gadgets = [
        {
        pic: "https://images-na.ssl-images-amazon.com/images/I/41-voDCMtzL._AC_US160_.jpg",
            name: "Bose wireless headphones",
            price: "$349.00"
        },
        {
        pic: "https://images-na.ssl-images-amazon.com/images/I/31HgZMEzt1L._AC_US218_.jpg",
        name: "DJI Phantom",
        price: "$416.00"
        },
        {
            pic: "https://images-na.ssl-images-amazon.com/images/I/410hNaCfEpL._AC_US160_.jpg",
            name: "GoPro HERO5 Black",
            price: "$399.00"
        }
    ];
}]);

