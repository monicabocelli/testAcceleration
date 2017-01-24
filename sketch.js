var value = 0;
var singleShake = 0;
//var value2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(204);
   text(value, width/2, height/2);
   text(singleShake, width/2, height/2+40);
}

  
// 2)
function deviceShaken(){
    value += abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
}
