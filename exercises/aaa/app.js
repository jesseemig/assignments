angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controller: "HomeController"
        })

    .when("/tips", {
        templateUrl: "spa/tips/tips.html",
        controller: "TipsController"
    })

    .when("/involved", {
        templateUrl: "spa/involved/involved.html",
        controller: "InvolvedController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}])

         

       