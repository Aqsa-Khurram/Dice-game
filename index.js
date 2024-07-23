window.onload=function(){
    getRandomNumber();
}

function getRandomNumber(){
    var randomnum1=Math.floor((Math.random()*6))+1;
    var randomnum2=Math.floor((Math.random()*6))+1;
    var images=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
    if (randomnum1>randomnum2){
        document.querySelector("h1").innerHTML="🎉Player 1 wins🎉";
    }
    else if (randomnum2>randomnum1){
        document.querySelector("h1").innerHTML="🎉Player 2 wins🎉";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
    var imgElement1 = document.getElementsByClassName("img1")[0];
    var imgElement2 = document.getElementsByClassName("img2")[0];
    imgElement1.src=images[randomnum1-1];
    imgElement2.src=images[randomnum2-1];
}