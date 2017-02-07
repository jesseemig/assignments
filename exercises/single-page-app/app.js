angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controler: "HomeController"
        })

    .when("/about", {
        templateUrl: "spa/about/about.html",
        controler: "AboutController"
    })

    .when("/whyilove", {
        templateUrl: "spa/love/whyilove.html",
        controller: "WhyILoveController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}]);



