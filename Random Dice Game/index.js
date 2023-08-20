var a=Math.floor(Math.random()*6);

var b=Math.floor(Math.random()*6);


if(a===0) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice1.png");
if(a===1) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice2.png");
if(a===2) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice3.png");
if(a===3) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice4.png");
if(a===4) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice5.png");
if(a===5) document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice6.png");

if(b===0) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice1.png");
if(b===1) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice2.png");
if(b===2) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice3.png");
if(b===3) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice4.png");
if(b===4) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice5.png");
if(b===5) document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice6.png");

if(a>b){
    document.querySelector("h1").textContent="PLayer 1 Wins!"
}else if(b>a){
    document.querySelector("h1").textContent="PLayer 2 Wins!"
}else{
    document.querySelector("h1").textContent="Tie!"
}