angular.module("MyApp")

.service("CartoonService", [function (newCartoon, upload) {
   
    this.newCartoon = [];
    
    this.upload = {};
    
    this.displayCartoon = function (newCartoon, upload) {
        
        this.newCartoon.push(upload);
        
    };
    
}]);
