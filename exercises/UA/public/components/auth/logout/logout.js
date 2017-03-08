var app = angular.module("TodoApp");

app.controller("LogoutController", ["UserService", function (UserService) {  
    UserService.logout();
}]);