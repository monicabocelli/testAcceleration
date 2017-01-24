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
    text("value", width/2, height - height/10);
    
    //var valore = deviceShaken(value);
  
   /* for (valore > 0; valore < 1; valore += valore){

        textSize(height/30);
        textAlign(CENTER);
        textStyle(NORMAL);    
        
        text(valore, width/2, height - height/8);
        
    }*/
   textSize(height/30);
   textAlign(CENTER);
   textStyle(NORMAL);
   text(value, width/2, height - height/8);
}
/*function deviceShaken(val){
    val = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    return val;
}*/

function deviceShaken(){
    value = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
}
