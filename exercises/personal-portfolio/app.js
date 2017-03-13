angular.module("routingApp", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider) {

        $routeProvider
            .when("/about", {
                templateUrl: "spas/about/about.html",
                controler: "AboutController"
            })

            .when("/resume", {
                templateUrl: "spas/resume/resume.html",
                controller: "WhyILoveController"
            })

            .otherwise({
                redirectTo: "/about"
            });

    }]);



