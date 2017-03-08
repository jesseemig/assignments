angular.module("TodoApp.Auth")

.controller("LogoutController", ["UserService", function (UserService) {
    UserService.logout();
}]);