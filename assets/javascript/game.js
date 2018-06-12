//assigning random numbers to each crystal and setting a number to reach
var targetNumber = Math.floor((Math.random() * 100) + 20);

var crystalNumber = Math.floor((Math.random() * 10) + 1);
var crystalNumber1 = Math.floor((Math.random() * 10) + 1);
var crystalNumber2 = Math.floor((Math.random() * 10) + 1);
var crystalNumber3 = Math.floor((Math.random() * 10) + 1);
//putting the randomly generated number on the HTML page
$("#compPick").text(targetNumber);
//setting count for everything to 0
var counter = 0;
var wins = 0;
var losses = 0;

$(".wins").text("Wins: " +wins);
$(".losses").text("Losses: " + losses);

//adding images 
var imageCrystal = $("<img>");
imageCrystal.addClass("button");
imageCrystal.attr("src", "assets/images/crystal.jpg");
$("#crystals").append(imageCrystal);

var imageCrystal1 = $("<img>");
imageCrystal1.addClass("button1");
imageCrystal1.attr("src", "assets/images/crystal1.jpg");
$("#crystals").append(imageCrystal1);

var imageCrystal2 = $("<img>");
imageCrystal2.addClass("button2");
imageCrystal2.attr("src", "assets/images/crystal2.jpg");
$("#crystals").append(imageCrystal2);

var imageCrystal3 = $("<img>");
imageCrystal3.addClass("button3");
imageCrystal3.attr("src", "assets/images/crystal3.jpg");
$("#crystals").append(imageCrystal3);

//giving click funtion to images
imageCrystal.on("click", function() {
    $("#currentScore").text("Your total score is: " + crystalNumber);
    counter += crystalNumber;
});

imageCrystal1.on("click", function() {
    $("#currentScore").text("Your total score is: " + crystalNumber1);
    counter += crystalNumber1;
});

imageCrystal2.on("click", function() {
    $("#currentScore").text("Your total score is: " + crystalNumber2);
    counter += crystalNumber2;
});

imageCrystal3.on("click", function() {
    $("#currentScore").text("Your total score is: " + crystalNumber3);
    counter += crystalNumber3;
});




if (counter === targetNumber) {
    alert("YOU WIN!!");
    wins++;
}
else if (counter >= targetNumber) {
    alert("Boo, YOU LOSE!");
    losses++;
}