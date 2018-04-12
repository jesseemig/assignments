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



//  angular.module('MyApp', [])
   //   .controller('CalculatorController', function($scope) {
    
    
       //   $scope.result = function() {
         //     if ($scope.operator == '+ Add') {
           //       return $scope.a + $scope.b;
           //   }
           //   if ($scope.operator == '- Subtract') {
             //     return $scope.a - $scope.b;
           //   }
           //   if ($scope.operator == '* Multiply') {
            //      return $scope.a * $scope.b;
            //  }
            //  if ($scope.operator == '/ Divide') {
             //     return $scope.a / $scope.b;
           //   }
       //   };
   //   });


angular.module("MyApp", [])

.controller("CalculatorController", ["$scope", function ($scope) {

    var equation = [];
    
    var viewTotal = $("#total");
    
    var currentNumber = "";
    
    var previousNumber = "";
    
    var operator = "";
    
    viewTotal.text("0");
    
    // tells page that num and item IDs are buttons, and to run the function when clicked
   $(".number.item").click(function() {
		var amount = $(this).text();
		currentNumber += amount;
		if(viewTotal.text() === "0") {
			viewTotal.text(amount);
		} else {
			viewTotal.append(amount);
		}
	});
	
	$(".operator.item").click(function() {
		var symbol = $(this).text();
		operator = symbol;
		viewTotal.append(" " + symbol + " ");
		previousNumber = currentNumber;
		currentNumber = "";
	});
	
	$("#plusMinus").click(function() {
		currentNumber = -(currentNumber);
		viewTotal.text(currentNumber);
	});
	
	$("#percent").click(function() {
		currentNumber = (currentNumber/100);
		viewTotal.text(currentNumber);
	});
	
	$("#equals").click(function() {
		if (operator === "+"){
			currentNumber = (parseFloat(previousNumber) + parseFloat(currentNumber)).toString();
		} else if (operator === "-"){
			currentNumber = (parseFloat(previousNumber) - parseFloat(currentNumber)).toString();
		} else if (operator === "/"){
			currentNumber = (parseFloat(previousNumber) / parseFloat(currentNumber)).toString();
		} else if (operator === "*"){
			currentNumber = (parseFloat(previousNumber) * parseFloat(currentNumber)).toString();
		}
		viewTotal.append(" = " + currentNumber);
	});
	
	$("#clear,#clearall").click(function() {
		viewTotal.text("0");
		currentNumber = "";
		if ($(this).attr("id") === "clearall") {
			previousNumber = "";
		}
	});
    
    
    
}]);
            
            
            
            
            
            
            
            
            
            
            
