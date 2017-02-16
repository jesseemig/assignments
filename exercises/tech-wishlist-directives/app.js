angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/tech", {
            controllerer: "techController",
            templateUrl: "public/views/tech/tech.html"
    })
      .when("/wishlist", {
            controller: "wishlistController",
            templateUrl: "public/views/wishlist/wishlist.html"
    });
}]);






    