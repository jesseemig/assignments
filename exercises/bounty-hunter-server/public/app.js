angular.module("MyApp", [])
.service("BountyService", ["$http", function ($http) {
    
    this.getBounties = function() {
        return $http.get("/bounties")
    }
          
    }]);