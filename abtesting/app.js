var button = $("#button");
var elephant = $("#elephants");
button.click(function () {
  elephant.toggle();
});

var menu = $("#menu");
var third = $("#third");
third.clone().insertAfter("#third").attr("id", "fourth");

$("#fourth").contents().wrap("<a href='hello'> </a>");

var rhino = $("#rhinoceros");

setTimeout(function () {
  rhino.css("display", "block");
}, 3000);
