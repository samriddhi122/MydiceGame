alert("hello");
var random1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" +random1+ ".png";
var randomDiceSource="images/" +randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSource);


var random2= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" +random2+ ".png";
var randomDiceSource="images/"+randomDiceImage;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceSource);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Wins✌";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 Wins✌";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}