var app = angular.module("MyApp")

app.controller("MainController", function($scope) {
   
    $scope.name = "Bob";
     
    
    $scope.person = {
        firstName: "Jesse",
        lastName: "Emig"
    }
    
    
    
    $scope.addSandwich = function() {
        sandwhiches.push({
            name: $scope.name,
            description: $scope
        

        appetizers: [
            {  
            name: "Turkey Club",
            ingredients: ["stuff", "some good stuff", "other things"],
            description: "just shut up and eat it"
            }
        ],
    };
});
