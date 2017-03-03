var count = 0;
var score = 0;

function userName() {
  var userBox = prompt("What's my name?","");
  if ((userBox === "") || (userBox === "null")) {
    userBox = "Name please!!"
  }
  if (userBox === "Pierre") {
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = "You are correct, my friend!";

      count++
  } else {
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = "Oh come on!!!";
      score++
  }
}

function userCountry() {
  var  countryBox = prompt("Where am I from?","");
  if ((countryBox === "") || (countryBox === null)){
    countryBox = "Hurry!!";
  }
  else if (countryBox === "DRCongo") {
    var answerParagraph = document.getElementById("answer-location3");
    answerParagraph.innerHTML = "Where it all started! Let there be me!";
      count++;
  } else {
    var answerParagraph = document.getElementById("answer-location3");
    answerParagraph.innerHTML = "Awww! Try again!";
      score++;
  }
}

function userColor() {
var colorBox = prompt("What's my favority color?","");
if ((colorBox === "") || (colorBox === null)) {
  colorBox = "Too slow!!";
}
  else if (colorBox === "Yellow") {
    var answerParagraph = document.getElementById("answer-location2");
    answerParagraph.innerHTML = "Bright & Lively!";
      count++
  } else {
    var answerParagraph = document.getElementById("answer-location2");
    answerParagraph.innerHTML = "Awww! Try again!";
      score++
  }
  alert("Congratulations!! You got " + count + " questions correct!!");
  alert("Oh snap!! You missed " + score + " answers!");
}
//userColor("Yellow");*/
/*function askUserColor() {
var colorBox = prompt("What's my favority color?","");
  if (colorBox === "") || (colorBox === null) {
    colorBox = "";
    }
  return colorBox;
}
*/
function guessnumber () {
userName();
userCountry();
userColor();
var answerParagraph = document.getElementById("answer-location4");
}
guessnumber(userName, userCountry, userColor)
/*
  console.log("Asking user for his/her name...");
var greeting ="Welcome " + userName + "!";
  console.log("Getting today's date....");
var today = new Date();
greeting += "\n" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
  alert(greeting);
/******This is a multiple line comment
      Check it out like so
*********/
