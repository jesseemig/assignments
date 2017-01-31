var list = [];

$(function() {
$("#btn").click(function() {
   
    list = $("#box").val();

    var added= `
<li><button id="remove" aria-label="Close Account Info Modal Box">X</button> 
${list}</li>`
    
    
    $("#usLi").append(added);
 
       
});
$("#form")[0].reset();
});


$("#remove").click(function() {
    var rid = $(this).val();
    $("*[list-rid=" + rid + "]").remove();
});





var count = 0;


$(document).ready(function() {
    $("#btn").click(function() {
        count++;
        $("#here").text(count);
    });
})