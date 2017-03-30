var app = angular.module("MyApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .when("/resume", {
            templateUrl: "components/resume/resume.html",
            controller: "ResumeController"
        })
        .when("/projects", {
            templateUrl: "components/projects/projects.html",
            controller: "ProjectsController"
        })
        .otherwise({
            redirectTo: "/"
        });
});


