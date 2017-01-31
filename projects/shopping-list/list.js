var pickUp = [];


$("#btn").click(function () {

    pickUp = $("#box").val();

    var added = `<li><button aria-label="Close Account Info Modal Box">X</button> 
${pickUp}</li>`


    $("#usLi").append(added);

    $("#box").val("");
});




$("#ul").on("click", ".remove", function() {

    $(this).parents("li").remove();
});