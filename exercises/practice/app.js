//  app.js

var app = angular.module('battleArena', ['ngRoute', 'battleArena.dashboard', 'battleArena.leaderboard']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/dashboard'
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
});

// IN PUBLIC FOLDER

