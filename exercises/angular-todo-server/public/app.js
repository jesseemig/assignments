var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    
    
    $scope.todos = []

    $scope.upload = function (add) {
        $scope.todos.push($scope.add)
        $scope.add = {};
    };
    
    
    $http.get("http://api.vschool.io/jesseemig/todo").then(function (response) {
        console.log(response.data);
        var blah = (response.data)
        $scope.todos = blah;
    });
    
    
    $http.post("http://api.vschool.io/jesseemig/todo", function (req, res) {
    console.log(req.body);
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
});
 //   $scope.remove = function (index) {
 //       $scope.todos.splice(index, 1);
 //   }



 //   };

  }]);


