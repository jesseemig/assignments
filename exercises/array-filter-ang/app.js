//  we put callback in ( ) so that we can run any function through this function
Array.prototype.myFilter = function (callback) {
      var array = this;
      var newArray = [];

      for (var i = 0; i < array.length; i++) {
          if (callback(this[i])) {
                  newArray.push(this[i]);
              }
      }
      return newArray;
  };



var theArray = ["pan", "can", "apple", "pie", "bottle"];

//  calls myFilter Method on everyr item
  ourNewArray = ourArray.myFilter(function(item) {
//  tells it to perform function on each item       
      return item.length < 4;

  });

  console.log(ourNewArray);