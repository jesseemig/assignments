var person ={
    name: "Jesse",
    age: 33,
    lived: ["Utah", "Alaska", "DC", "Texas"],
    job: "In school",
    friends: [
        {
            name: "Adam",
            age: 32,
            lived: [
                {
                    place: "Utah", 
                    length: 29,
                    city: "Highland",
                },
            ],
            job: [
                 {
                     title: "QA",
                     company: "Excel",
                     experience: 3,
                 },
            ],
            hobbies: [
                {
                    sport: "soccer",
                    winterSport: "snowboarding",
                },
            ],
        },
        {
            name: "Nate",
            age: 33,
            lived: [
                {
                    place: "Florida",
                    length: 2,
                    city: "Orlando",
                }
            ],
            job: [
                {
                    title: "Pilot",
                    company: "Delta",
                    experience: 4,
                },
            ], 
            hobbies: [
                {
                    sport: "hiking",
                    winterSport: "skiing",
                },
            ],
        },
    ],
};
console.log(person.lived[1]);
console.log(person.friends[0].name);