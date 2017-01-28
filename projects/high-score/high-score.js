


$("#btn").click(function() {
    var name = $("#idName").val();
    var game = $("#idGame").val();
    var date = $("#idDate").val();
    var score = $("#idScore").val();
    var otherRow = `
    <tr>
        <td>${name}</td>
        <td>${game}</td>
        <td>${date}</td>
        <td>${score}</td>
    </tr>`
    
    
    $("#table").append(otherRow);

});


