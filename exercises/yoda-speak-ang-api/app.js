var app = angular.module("YodaSpeak", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
    
    var config = {
        headers: {"X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            }
    };
    
    $scope.translation = function(location) {  
        
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config).then(function(response) {
            
            $scope.reply = response.data;
            
        })
        
     };
    
}]);


