var app = angular.module("routingApp", ["ngRoute", "routingApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "ProfileController"
        })
        .when("/otherMusic", {
            templateUrl: "components/otherMusic/otherMusic.html",
            controller: "otherMusicController"
        })
        .otherwise({
            redirectTo: "/"
        });
});