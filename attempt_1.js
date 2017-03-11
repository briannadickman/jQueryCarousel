var squares = 20;
var counterArray = [];
var count = 0;

// console.log(peopleArray[0].name);
$(document).ready(function(){
  // console.log(peopleArray);

  // for (var i = 0; i < peopleArray.length; i++) {
  //   console.log(peopleArray[i].name);
  //   console.log(peopleArray[i].shoutout);
  // }

  createCounter();
  addEventListeners();
  createStudentObjects();
});

    // $(this).data("name", peopleArray[i].name);
    // $(this).data("shoutout", peopleArray[i].shoutout);
  //  console.log($(this));
    // console.log(peopleArray[i].name);
    // console.log(peopleArray[i].shoutout);
//  }

function createCounter(){
  for (var i = 0; i < squares; i++) {
    $(".display-counter").append("<div id='square'></div>");
    $(this).data("student", peopleArray[i].name);
    // $(this).data("shoutout", peopleArray[i].shoutout);
    // $(this).push(counterArray);

    // $(".student").html("<p>" + peopleArray[i].name + "</p>");
    // $(".shoutout").html("<p>" + peopleArray[i].shoutout + "</p>");
    // $(this).push(counterArray);
    // }
    //
  }
  console.log(counterArray.data());
} //end createCounter function

function addEventListeners(){

  $(".button-box").on("click", "#next", function(){
    count++;
    console.log(count);
    console.log("Next button clicked");
  });

  $(".button-box").on("click", "#prev", function(){
    count--;
    console.log(count);
    console.log("Prev button clicked");
  });

  $(".display-counter").on("click", "div", function(){
      $(this).data("name");
  });
} //end addEventListeners function

function toggleHighlight() {
  if (count == 4) {
    $(".square").addClass("highlight");
  } else if (count !== 4) {
      $(".display-counter").children().removeClass("highlight");
  }

}
