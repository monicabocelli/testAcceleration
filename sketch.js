var energy = 0;
var singleShake = 0;
var finished = false;
var level1 = 20000;

//var value2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(237, 34, 93);
  // by default, the shake thresold is set to 30.
  // you can modify it using setShakeThreshold() function.
  setShakeThreshold(20);
}

function draw() {
  if (energy >= level2){
    //do things
  } else if (energy >= level1) {
    //display things
    background(0);
  } else {
    background(204);
  }

  text(energy, width/2, height/2);
  text(singleShake, width/2, height/2+40);


}


function reset() {

  //set all the variables at original value
  energy = 0;
}

function deviceShaken(){
  singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
  //energy += singleShake;
  
  if (singleShake > 30){
    energy += singleShake;
  } else { finished == true;}
}
