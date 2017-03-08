var app = angular.module("TodoApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {  
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
            controller: "LogoutController",
            template: ""
        })
}]);


app.service("TokenService", [function () {  
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };
}]);


app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {  
    
    this.user = $localStorage.user || {};
    
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
}]);


app.factory("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {  
    return {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }
            return $q.reject(response);
        }
    }
}]);

app.config(["$httpProvider", function ($httpProvider) {  
    $httpProvider.interceptors.push("AuthInterceptor");
}]);


                // ***OR***
                

//angular.module("TodoApp.Auth", ["ngStorage"]);

//.config(["$routeProvicer", function ($routeProvicer) {
//    $routeProvider
//    .when("/signup", {
//        templateUrl: "components/auth/signup/signup.html",
//        controler: "SignupController"
//    })
//    .when("/login", {
//        templateUrl: "components/auth/login/login.html",
//        controler: "LoginController"
//    })
//    .when("/logout", {
//        templateUrl: "components/auth/logout/logout.html",
//        controler: "LogoutController"
//    });
//    
//    .service("TokenService", ["$localStorage", function ($localStorage) {
//        this.setToken = function(token) {
//            $localStorage.token = token;
//        };
//        
 //       this.getToken = function() {
 //           return $localStorage.token;
//        };
//        
//        this.removeToken = function() {
//            delete $localStorage.token;
//        };
//    }])
//    
//    .service("UserService", ["$http", "$location", "TokenService", //function ($http, $location, TokenService) {
//        this.signup = function(user) {
//            return $http.post("/auth/signup", user);
 //       };
 //       
 //       this.login = function(user) {
 //           return $http.post("/auth/login", user).then(function //(response) {
 //               TokenService.setToken(response.data.token);
 //               return response.data;
 //           });
 //       };
 //       
 //       this.logout = function() {
 //           TokenService.removeToken();
 //           $location.path("/");
 //       };
 //       
 //       this.isAuthenticated = functio() {
 //           // 1 ! makes false. 2 !! makes true
 //           return !!TokenService.getToken();
 //       };
 //   }]);
//}])