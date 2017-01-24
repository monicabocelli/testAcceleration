var value = 0;
var singleShake = 0;

var finished = false;
//var value2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setShakeThreshold(0);
}

function draw() {
   if(finished == false) {
    background(204);
   } else {
    background(255,0,0);
   }

   text(value, width/2, height/2);
   text(singleShake, width/2, height/2+40);
}

  
// 2)
function deviceShaken(){
    singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);

    if(singleShake > 20){
        value += abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    } else {
        finished = true;
    }

}
