var shopper = {
    firstName: "Jesse",
    age: 33,
    isthief: false,
    itemsInCart: [
        {
            itemName: "apple",
            day: 1,
            price: .75,
            organic: true,
        },
        {
            itemName: "oreos",
            day: 2,
            price: 2.22,
            organic: false,
        }
    ],
    myFunction: function () {
        return ("Thanks for shopping with us");
    }

}

console.log(shopper.myFunction());