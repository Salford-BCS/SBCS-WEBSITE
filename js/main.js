$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".mobile-menu").toggle();
  });
});

$(".logo").click(function (e) {
  e.preventDefault();
  console.log("new");
});
