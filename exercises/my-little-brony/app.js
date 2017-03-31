angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "spa/home/home.html",
            controller: "HomeController"
        })

    .when("/add", {
        templateUrl: "spa/add/add.html",
        controller: "AddController"
    })

    .otherwise({
        redirectTo: "/home"
    });

}])

         

       