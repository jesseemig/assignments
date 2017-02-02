var app = angular.module("MyApp")

app.controller("MainController", function($scope) {
   
    $scope.name = "Bob";
     
    
    $scope.person = {
        firstName: "Jesse",
        lastName: "Emig"
    };
    
    
    
    $scope.menu = {

        appetizers: [
            {  
            name: "onion rings",
            ingredients: ["stuff", "some good stuff", "other things"],
            description: "just shut up and eat it"
            }
        ],
    };
});

var badge = angular.module("ReturnBadge", [])

badge.controller("SecondController", function($scope) {
    
    
    
})

    