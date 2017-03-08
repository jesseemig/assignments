var app = angular.module("TodoApp");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {  
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if ($scope.user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There was a problem: " + response.data);
            });
        }
    }
}]);
