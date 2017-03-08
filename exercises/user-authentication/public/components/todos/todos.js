var app = angular.module("TodoApp");

app.service("TodoService", ["$http", function ($http) {
    this.getTodos = function () {
        return $http.get("/api/todos").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.saveTodo = function (todo) {
        return $http.post("/api/todos", todo).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);

app.controller("TodoController", ["$scope", "$http", "TodoService", function ($scope, $http, TodoService) {
    $scope.todo = {};
    $scope.todos = [];

    (function getTodos() {
        TodoService.getTodos().then(function (todos) {
            $scope.todos = todos;
        });
    })();
}]);