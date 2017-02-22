var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    }
];

function combine(people) {
    
    for (var i = 0; i < people.length; i++) {

        for (var j = 0; j < people.length; j++) {

        if ((i != j) && people[i].email === people[j].email) {
            people[i].numFriends += people[j].numFriends;
            people.splice(j, 1);
            j--;
        }
        } 
        
    }
    return people;
}
console.log(combine(people));