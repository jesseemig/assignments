var count = 0;


$(document).ready(function() {
    $("#btn").click(function() {
        count++;
        $("#here").text(count);
    });
})



