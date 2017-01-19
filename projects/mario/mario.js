document.getElementById("btn").addEventListener("click", grandTotal);
function grandTotal() { 
    var goombasCaught = document.getElementById("gc").value;
    
    var bobCaught = document.getElementById("bc").value;
    
    var cheepCaught = document.getElementById("cc").value;
    
    var goombasWorth = goombasCaught * 5;
    document.getElementById("goomba-price").textContent= goombasWorth;
    
    var bobWorth = bobCaught * 7;
    document.getElementById("bob-price").textContent= bobWorth;
    
    var cheepWorth = cheepCaught * 11;
    document.getElementById("cheep-price").textContent= cheepWorth;
    
    var total = goombasWorth + bobWorth + cheepWorth;
   document.getElementById("totalPrice").textContent= total;
    
  }
grandTotal();



