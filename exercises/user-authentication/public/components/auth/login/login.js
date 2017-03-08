angular.module("TodoApp.Auth")

.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.login = function(user) {
        UserService.login(user).then(function (data) {
            $location.path("/todo");
        }, function (data) {
            alert(data.message);
        });
    };
}]);