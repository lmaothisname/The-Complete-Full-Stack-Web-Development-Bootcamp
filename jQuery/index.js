$("h1").css("color","red");
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("h1").hasClass("margin-50")
$("h1").text("Bye");
$("button").html("<em>Bye.</em>");
$("img").attr("src");
$("a").attr("href","https://www.yahoo.com");


$("h1").click(function() {
  $("h1").css("color","purple");
});


$("button").click(function () {
  $("h1").css("color","purple");
});


$("input").keydown(function(event) {
  $("h1").text(event.key);
});


$("button").on("click",function () {
  $("h1").toggle();
});