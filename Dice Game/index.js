
var randomNumber1 = Math.floor(Math.random()*6)+1;
randomDice = "dice"+randomNumber1+".png";
var imageSrc = "images/"+randomDice;

document.querySelectorAll("img")[0].setAttribute("src" , imageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
randomDice = "dice"+randomNumber2+".png";
var imageSrc = "images/"+randomDice;

document.querySelectorAll("img")[1].setAttribute("src" , imageSrc);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 won!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML="🏳️Draw!";
}