ponyangular.module("MyApp")

.service("voteService", [function () {
    
    this.upvotes = 0;
    
    this.downvotes = 0;
    
    this.increment = function () {
        this.upvotes++;
        return this.upvotes;
    };
    
    this.decrement = function () {
        this.downvotes--;
        return this.downvotes;
    }
    
    
}]);
