function rolldice(){


var randomNumber1 = Math.random();
randomNumber1= Math.floor(Math.random() *6 +1);

var img = 'images/dice' + randomNumber1 + '.png';
var img1 = document.querySelector(".img1");
document.querySelector(".img1").setAttribute("src", img);

var randomNumber2 = Math.random();
randomNumber2= Math.floor(Math.random() *6 +1);

var img = 'images/dice' + randomNumber2 + '.png';
var img1= document.querySelector(".img2");
document.querySelector(".img2").setAttribute("src", img);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎉 Player 1 Wins";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🎉 Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}

rolldice()

document.querySelector('#footer p').innerHTML = `Copyright © ${new Date().getFullYear()} by Kamesh Baskar. All Rights Reserved.`;
