//  document.getElementById("addBtnId").addEventListener("click", addTotal);
// function addTotal() {
    // var add1 = document.getElementById("addId1").value;

    // var add2 = document.getElementById("addId2").value;
    
    // var added = +add1 + +add2;
    // document.getElementById("addTotal").textContent= added;
    
// }

// addTotal();

// ^^^Above would allow adding function^^^




// BELOW works for subtracting
// var app = angular.module("MyApp", [])

// app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
    
    // $scope.subTotal = function () {
        // return $scope.first - $scope.second;
        
    // };
    
// }]);



angular.module('MyApp', [])
    .controller('CalculatorController', function($scope) {
    
    
        $scope.result = function() {
            if ($scope.operator == '+ Add') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '- Subtract') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '* Multiply') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/ Divide') {
                return $scope.a / $scope.b;
            }
        };
    });





