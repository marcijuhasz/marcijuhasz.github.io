var i = 0;
var txt = 'Márton Juhász | A visual diary.'; /* The text */
var txt2 = 'About me.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{

    $("#base").fadeIn(3000);
  }
  
}


function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
  else{

    $("#base").fadeIn(3000);
  }
  
}






var i = 0;
var image = document.getElementById("sine");
var bg = document.getElementById("dynamic");
var interval = 0;

window.addEventListener('scroll',function(){

  interval++;
  if(interval > 2){
    interval =0;
    SineWave();

  }
})


function SineWave(){

  if(i <32){

    image.src = "../img/out/" + i.toString() + ".png";
  i++;
  }
  else{

    i = 0;
  }
  



}