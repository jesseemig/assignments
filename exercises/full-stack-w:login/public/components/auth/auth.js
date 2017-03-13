angular.module("routingApp.Auth", ["ngRoute", "ngStorage"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            template: "",  // We don't need a template for the logout page, but this must be here or we'll get problems
            controller: "LogoutController"  // The only thing this will do is remove the token from local storage
        });
}])

/*
* This service will only end up being used by other services, but having it separated into its own
* service helps us keep it logically separated and simple to understand when reading
* */
.service("TokenService", ["$localStorage", function ($localStorage) {
    this.setToken = function(token) {
        $localStorage.token = token;
    };

    this.getToken = function() {
        return $localStorage.token;
    };

    this.removeToken = function() {
        delete $localStorage.token;
    };
}])

/*
* This service is all about the user - logging them in, signing them up, logging them out, and checking if they're
* authenticated (for use in our navbar, e.g.)
* */
.service("UserService", ["$http", "$location", "$localStorage", "TokenService", function ($http, $location, $localStorage, TokenService) {
    var self = this;

    this.user = $localStorage.user || {};

    this.signup = function(user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function(user) {
        return $http.post("/auth/login", user).then(function (response) {
            // Use the TokenService to save the token to localStorage
            TokenService.setToken(response.data.token);
            // Also save the user to localStorage, in case we want to display their name or other info in the app
            $localStorage.user = response.data.user;
            // Save the user also to this service's `user` property so we can easily call `UserService.user` anywhere we want
            self.user = response.data.user;
            return response.data;
        });
    };

    this.logout = function() {
        TokenService.removeToken();
        $location.path("/");
    };
    // The !! turns the truthey/falsey value into an actual `true` or `false` boolean
    this.isAuthenticated = function() {
        return !!TokenService.getToken();
    };
}])

// $q is a Promise
// An HTTP interceptor runs on every outgoing and incoming HTTP request/response. There are 4 methods
// we can use: request, requestError, response, and responseError. We're using it to add an `Authorization`
// header to every outgoing request, as well as gracefully handle any response errors coming from the server
// when it turns out our token is either missing or is invalid.
.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        config.headers.bob = "Not really";
        return config;
    };

    this.responseError = function(response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}])

// Push our interceptor to the array of http interceptors. You can actually create a bunch of them,
// and they'll all run on each request/response.
.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);