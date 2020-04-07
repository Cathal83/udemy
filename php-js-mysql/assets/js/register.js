$(document).ready(function() {
  // onclick signup, hide login and show registration form
  $("#signup").click(function() {
    $("#first").slideUp("slow", function() {
      $("#second").slideDown("slow");
    });
  });

  // onclick signin, show login and hide registration form
  $("#signin").click(function() {
    $("#second").slideUp("slow", function() {
      $("#first").slideDown("slow");
    });
  });
});
