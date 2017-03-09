angular.module("routingApp", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider) {

        $routeProvider
            .when("/about", {
                templateUrl: "spas/about/about.html",
                controler: "AboutController"
            })

            .when("/whyilove", {
                templateUrl: "spa/love/whyilove.html",
                controller: "WhyILoveController"
            })

            .otherwise({
                redirectTo: "/about"
            });

    }]);



