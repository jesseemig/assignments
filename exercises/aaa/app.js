angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controller: "HomeController"
        })

    .when("/tips", {
        templateUrl: "spa/playlist/playlist.html",
        controller: "playlistController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}])

         

       