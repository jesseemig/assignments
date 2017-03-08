angular.module("TodoApp")

.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        controller: function ($scope) {
            $scope.userService = UserService
        }
    }
}]);