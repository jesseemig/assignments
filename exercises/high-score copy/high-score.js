 var name = $("#idName").val();
 var game = $("#idGame").val();
 var date = $("#idDate").val();
 var score = $("#idScore").val();


 var trash = ["I am the King", "Top score forever", "You'll never beat me", "Keep dreaming", "Bow down"];


 $("#btn").click(function (name, game, date, score) {
     var name = $("#idName").val();
     var game = $("#idGame").val();
     var date = $("#idDate").val();
     var score = $("#idScore").val();

     if (name.length <= 0 || game.length <= 0 || date.length <= 0 || score.length <= 0) {
         console.log("required");

     } else if (name.length >= 0 && game.length >= 0 && score.length >= 0 && date.length >= 0) {

         var otherRow = `
   <tr>
       <td>${name}</td>
       <td>${game}</td>
       <td>${date}</td>
       <td>${score}</td>
   </tr>`


         $("#table").append(otherRow);


         if ($("#check").is(":checked")) {
             var smack = trash[Math.floor(Math.random() * trash.length)];
             `<tr>${smack}</tr>`

             $("#table").append(smack);

         };
         $("#form")[0].reset();

     };
 });