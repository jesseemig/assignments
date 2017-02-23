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




<!DOCTYPE html>
<html lang="en" ng-app="MyApp">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>To do</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body ng-controller="MainController">

    <div class="row">

        <div c










         <h1>Todo List</h1>

                                     <div class="row form-group">


<div class="col-sm-6">

<form name="todoForm" ng-submit="submitForm()" novalidate>

                                               <div class="form-group" ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }">
<label>Title</label>
              <input type="text" class="form-control" ng-model="add.title" required>
                                                                           <p ng-show="todoForm.title.$invalid && !todoForm.title.$pristine" class="help-block">A title is required.</p>
                                                                                                                                                                                      </div>


                                                                                                                                                                                        <div class="form-group" ng-class="{ 'has-error' : userForm.username.$invalid && !userForm.username.$pristine }">
<label>Description</label>
                    <input type="text" placeholder="Description" ng-model="add.desc">
</div>


  <div class="form-group" ng-class="{ 'has-error' : userForm.email.$invalid && !userForm.email.$pristine }">
<label>price</label>
              <input type="number" placeholder="Price" ng-model="add.price">
</div>

  <div class="form-group" ng-class="{ 'has-error' : userForm.email.$invalid && !userForm.email.$pristine }">
<label>Image</label>
              <input type="url" placeholder="Img URL" ng-model="add.img">
</div>


  <button type="submit" class="btn btn-primary" ng-click="upload()">Submit</button>

                                                                            </form>
                                                                              </div>


                                                                                </div>

                                                                                  <section ng-repeat="something in todos">

<div class="form-group">
<h5> {{thing.desc}} </h5>

                      <h5> {{thing.price}} </h5>

                                             <img src="{{ thing.img }}">

<div class="checkbox">
<label>
 <input type="checkbox" class="strikethrough">
</label>
  </div>
    </div>
      </section>

        <script src="app.js"></script>