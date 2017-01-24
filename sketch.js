var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(204);
    
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    fill(0);
    noStroke();
    text("SHAKE YOUR DEVICE", width/2, height - height/1.1);   
   
    for (value > 1; value < 1 ; value += deviceShaken(value)){

        textSize(height/20);
        textAlign(CENTER);
        textStyle(NORMAL);    
        text(value, width/2, height - height/8);
           
    }
}
function deviceShaken(val){
    val = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    return val;
}