angular.module("routingApp", [])

.service("homeService", [function () {
    this.count = 100;
    
    this.increment = function() {
        this.count++;
        return this.count;
    };