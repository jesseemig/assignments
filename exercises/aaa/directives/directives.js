angular.module("routingApp")

.directive("myPlaylist", function () {
    return {
        restrict: "E",
        scope: {
            wants: "="
        },
        templateUrl: "directives/directives.html"
    };
});
