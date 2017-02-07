//  create blank Array [] if setting, do not include if getting
var app = angular.module("MyApp", []);

app.controller("MainController", function ($scope) {

    $scope.addSandwich = function (sand) {
        $scope.sandwiches.push(sand);
        $scope.newSandwich = {};
    };

    $scope.sandwiches = [
        {
            name: "Turkey Club",
            description: "It's a club sandwich, so it's really good of course."
        }
    ]
});


    