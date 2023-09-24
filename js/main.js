$(document).ready(function () {
  $("hamburger-menu").click(function () {
    alert("You clicked the button!");
  });
});

$(".logo").click(function (e) {
  e.preventDefault();
  alert("new");
});
