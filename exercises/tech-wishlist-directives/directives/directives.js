angular.module("routingApp")

.directive("wishList", function () {
    return {
        restrict: "E",
        scope: {
            wants: "="
        },
        templateUrl: "directives/directives.html"
    };
});


