//create random number 1 for dicse1;
var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
//create rahndome image and random sourse for dicse 1
var randomimage="dice"+randomNumber1+".png";
var randomimagesourse="images/"+randomimage;
//now link this image to html code and change sourse
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesourse);

/////now for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;//create random number 1 for dicse2;
var randomimage2="dice"+randomNumber2+".png";//create randome image for dicse 2
var randomimagesourse2="images/"+randomimage2;//create image random sourse for dicse 2
var image2=document.querySelectorAll("img")[1];//now link this image to html code and change sourse
image2.setAttribute("src",randomimagesourse2);//-----

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}