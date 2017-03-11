//  DEFINING VARIABLES
var squares = peopleArray.length;
console.log(squares);
var divArray = [];

$(document).ready(function(){
  console.log(peopleArray);
  appendDivs();
  addEventListeners();
}); //end $(document).ready();

function appendDivs() {
  for (var i = 0; i < peopleArray.length; i++) {
    $('.square-container').append("<div id='square'></div>");
    var $el = $('.square-container').children().last();
    $el.data('id', i);
    divArray.push($el);
  }
  console.log(divArray);
} // end appendDivs function();

function addEventListeners() {
  $('.button-container').on('click', '#next', function(){
    console.log("Next Button Clicked!");
  });
  $('.button-container').on('click', '#prev', function(){
    console.log("Prev Button Clicked!");
  });

  $('.square-container').on('click', 'div', function(){
    $(this).addClass("highlight");
  });
}
