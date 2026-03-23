// button color of game
var buttonColours = ["red","blue","green","yellow"];
// hold the color of game
var gamePattern = [];
var started = false;
//array hold color user's click
var userClickedPattern = [];

var level = 0;
$(document).keypress(function () {
  if (!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started = true;
  }
});
// the action when button get press
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      },1000);
    }
  }
  else {
    console.log("wrong");
    //play sound wrong
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
//get random number
function nextSequence() {

  userClickedPattern = [];
  // increase level by 1
  level++;
  // update the level 
  $("#level-title").text("Level: "+level);
  //create random number from 0 to 3
  var randomNumber = Math.floor(Math.random()*4);
  // get the color of button
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// create a function play sound when button get press
function playSound(name) {
  var audio = new Audio("sounds/" +name+".mp3");
  audio.play();
}

// get animated flash with button
function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
