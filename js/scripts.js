let favorite = [];
let reFavorite = [];
$(document).ready(function(event){
  $("form#input").submit(function(event){

    event.preventDefault();
    favorite.push($("input#food").val());
    favorite.push($("input#gadget").val());
    favorite.push($("input#game").val());

    reFavorite.push(favorite[0]);
    reFavorite.push(favorite[1]);
    reFavorite.push(favorite[2]);

  $("#output").text("How about a " + favorite[1] + " made of " + favorite[0]);
  console.log(reFavorite)
  })
});