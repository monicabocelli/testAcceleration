var value = 0;
var singleShake = 0;

//var value2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // by default, the shake thresold is set to 30.
  // you can modify it using setShakeThreshold() function.
  setShakeThreshold(20);
}

function draw() {

   text(value, width/2, height/2);
   text(singleShake, width/2, height/2+40);
}

  
// 2)
function deviceShaken(){
  singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
  value += singleShake;
}
