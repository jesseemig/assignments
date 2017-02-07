var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
     //  $http.get("http://api.vschool.io/jesseemig/todo/[xxxxxxx]n").then(f//   unction(response) {
      //      $scope.todos = response.data;
   //    });
    
    $scope.todoList = []
    
     $scope.updateTodo = function() {
     //   $http.post( api url dsfjdfdsj).then(function() {
            $scope.todoList.push($scope.adding)
            
            $scope.adding = {};
            
        };
     }])
    
    
    
 //   $scope.removeItem = function(todo, index) {
 //       $http.delete( api url dsfjdfdsj).then(function() {
 //           $scope.todoList.splice(index, 1);
 //       });
 //   };
    
        
 //     $scope.updateTodo = function(todoObj) {
 //         $http.put("http://api.vschool.io/jesseemig/todo/[xxxxxxx]n" + //        todoObj._id, todoObj)
 //       };
    
    
    
//    $scope.toggleEdititng = function() {
//        
//    }
 
    
//  }])
