angular.module("myApp", [])
.controller("MainController", ["$scope", "$http", function ($scope, $http) {
            //  OLD WAY
   // $http.get("URL").then (function(response) {
    //    $scope.todos = response.data;
        
        // NEW WAY 
        TodoService.getTodos().then(function(reponse) {
            $scope.todos = reponse.data;
            // Instead of line above
            // $scope.todos = todos;
        })
        
    }]);

. service("TodoDervice", ["$http", function($http) {
    
    this.getTodos = function() {
        return $http.get("URL")
        .then(function (response) {
            return response.data;
        })
    }
}])



// ---------------------------------------------------------------

.controller("MainController", ["$scope", "RedService", "BlueService", function ($scope, RedService, BlueService) {
   
    $scope.redCount = RedService.count;
    scope.blueCount = BlueService.count;
    
    
    $scope.redClicked = function() {
        
        $scope.redCount = RedService.increment();
        scope.blueCount = BlueService.count;
    }
    
    
    $scope.blueClicked = function() {
        
        $scope.blueCount = BlueService.increment();
        scope.redCount = RedService.count;
    
}
}]);


angular.module("myApp", [])

.service("BlueService", [function () {
    this.count = 100;
    
    this.increment = function() {
        this.count++;
        return this.count;
    };
    
    this.decrement = function() {
        this.count--;
        return this.count;
    };
    
    this.reset = function() {
        if (this.count === 0) {
            this.reset();
            this.count === 100;
        }
    }
}])



