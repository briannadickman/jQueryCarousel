//  DEFINING VARIABLES
var squares = peopleArray.length;
var divArray = [];
var index = 0;

$(document).ready(function(){
  $("#name").text(peopleArray[0].name);
  $("#shoutout").text(peopleArray[0].shoutout);

  appendDivs();
  addEventListeners();
}); //end $(document).ready();


function appendDivs() {
  for (var i = 0; i < peopleArray.length; i++) {
    $('.square-container').append("<div class='square " + i + "'></div>");
    var $el = $(".square-container").children().last();
    $el.data({"id": i, "name": peopleArray[i].name, "shoutout": peopleArray[i].shoutout});
    console.log($el.data());
    divArray.push($el);
    //
    // $(this).data("name", peopleArray[i].name);
    // console.log($(this).data("name"));
    // $(this).data("shoutout", peopleArray[i].shoutout);
    // console.log($(this).data("shoutout"));

  }
console.log(divArray);

} // end appendDivs function();


function addEventListeners() {
  $('.button-container').on('click', '#next', function(){
    console.log("Next Button Clicked!");
    $("#name").text($(".square").data("name"));
    $(this).next().addClass("highlight");

  });

  $('.button-container').on('click', '#prev', function(){
    console.log("Prev Button Clicked!");
    $('.square').prev().removeClass("highlight");
  });

  $(".square-container").on("click", "div", function(){

    $("#name").text($(this).data("name"));
    $("#shoutout").text($(this).data("shoutout"));
    $("#count").text(($(this).data("id") + 1));
    $(this).addClass("highlight");
  });
}
