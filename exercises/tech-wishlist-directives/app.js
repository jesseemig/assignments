angular.module("routingApp", ["routingApp.techView", "routingApp.wishlistView", "ngRoute"])

.config(function ($routeProvider) {
    $routeProvider
        .otherwise("/tech");
    
});



