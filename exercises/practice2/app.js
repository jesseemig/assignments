document.getElementById("addBtnId").addEventListener("click", addTotal);
function addTotal() {
    var add1 = document.getElementById("addId1").value;

    var add2 = document.getElementById("addId2").value;
    
    var added = +add1 + +add2;
    document.getElementById("addTotal").textContent= added;
    
}

addTotal();