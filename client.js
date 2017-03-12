//  DEFINING VARIABLES
var squares = peopleArray.length;
var divArray = [];


$(document).ready(function(){
  $("#name").text(peopleArray[0].name);
  $("#shoutout").text(peopleArray[0].shoutout);
  appendDivs();
  $("div.square.0").addClass("highlight");
  addEventListeners();
}); //end $(document).ready();


function appendDivs() {
  for (var i = 0; i < peopleArray.length; i++) {
    $('.square-container').append("<div class='square " + i + "'></div>");
    var $el = $(".square-container").children().last();
    $el.data({"id": i, "name": peopleArray[i].name, "shoutout": peopleArray[i].shoutout});
    console.log($el.data());
    divArray.push($el);
  }
console.log(divArray);

} // end appendDivs function();


function addEventListeners() {
  var index = 0;

//   NEXT BUTTON   //
  $('.button-container').on('click', '#next', function(){
    $("#name").text($(divArray[index]).data("name")).fadeOut(function(){
      $("#name").fadeIn().text($(divArray[index]).data("name"));
    });

    $("#shoutout").text($(divArray[index]).data("shoutout")).fadeOut(function(){
      $("#shoutout").fadeIn().text($(divArray[index]).data("shoutout"));
    });

    index++;
      if ( index > 18 ) {
        index = 0;
      }

    if (index === 0) {
      $('div.square.18').removeClass("highlight");
      } else {
        $('.square').prev().removeClass("highlight");
      }
    $(divArray[index]).addClass("highlight");

      $("#count").text(($(divArray[index]).data("id") + 1));
  });


//   PREV BUTTON   //
  $('.button-container').on('click', '#prev', function(){
    $("#name").text($(divArray[index]).data("name")).fadeOut(function(){
      $("#name").fadeIn().text($(divArray[index]).data("name"));
    });

    $("#shoutout").text($(divArray[index]).data("shoutout")).fadeOut(function(){
      $("#shoutout").fadeIn().text($(divArray[index]).data("shoutout"));
    });

    index--;
      if ( index < 0 ) {
        index = 18;
      }

    if (index === 17) {
      $('div.square.18').removeClass("highlight");
      } else {
        $('.square').prev().removeClass("highlight");
      }
    $(divArray[index]).addClass("highlight");

        $("#count").text(($(divArray[index]).data("id") + 1));
  });


//  SELECT ON CLICK  //
  $(".square-container").on("click", "div", function(){
    index = $(this).data("id");
      if (index) {
        $(".square").removeClass("highlight");
        $(this).addClass("highlight");
      } else if (index === 0) {
        $(".square").removeClass("highlight");
        $(this).addClass("highlight");
      }
    $("#name").text($(this).data("name"));
    $("#shoutout").text($(this).data("shoutout"));
    $("#count").text(($(this).data("id") + 1));

  });
}
