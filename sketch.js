var energy = 0;
var singleShake = 0;

var level1 = 20000;

//var value2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // by default, the shake thresold is set to 30.
  // you can modify it using setShakeThreshold() function.
  setShakeThreshold(20);
}

function draw() {
  if (energy >= level1) {
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
  energy += singleShake;
}
