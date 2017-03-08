angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controller: "HomeController"
        })

    .when("/otherMusic", {
        templateUrl: "spa/otherMusic/otherMusic.html",
        controller: "otherMusicController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}])

         

       