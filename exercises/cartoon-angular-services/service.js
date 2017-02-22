angular.module("MyApp")

.service("cartoonService", [function (newCartoon, upload) {
   
    this.newCartoon = []
    
    this.displayCartoon = function (newCartoon, upload) {
        
        this.newCartoon.push(upload)
        this.upload = {};
    };
    
}]);
