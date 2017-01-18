var a = 4
var b = 2

if (b < a) {
      console.log(b);
  } else if (x > a) {
      console.log(a + "is bigger");
  } else {
      console.log("they are equal");
  }


var aSmile;
var bSmile;


if (aSmile === true && bSmile === true) {
        console.log("We have a problem");
    } else if (aSmile === true && bSmile === false) {
        console.log("no problem");
    } else if (aSmile === false && bSmile === true) {
          console.log("no problem");
    } if (aSmile === false && bSmile === false); {
        console.log("Uh oh");
    }


var date = new Date();
var hour = date.getHours();
if (hour < 12) {
    console.log("good morning");
} else if (hour > 12 && hour < 17) {
    console.log("good afternoon");
} else {
console.log ("good night");
}