var value = 0;
var value2 = 0;

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
    textSize(height/50);
    text("value", width/2, height - height/11);
  /*
    textSize(height/30);
    textAlign(CENTER);
    textStyle(NORMAL);
    text(value, width/2, height - height/8);
    //var valore = deviceShaken(value);                     //deviceShaken(); chiamarlo in draw() mi fa cambiare value in continuazione...
  
   /* 1) for (valore > 0; valore < 1; valore += valore){      2) for (value > 0; value < 1; value += value){

        textSize(height/30);                                    textSize(height/30);
        textAlign(CENTER);                                      textAlign(CENTER);
        textStyle(NORMAL);                                      textStyle(NORMAL);
        
        text(valore, width/2, height - height/8);               text(valore, width/2, height - height/8);
     
    }                                                            }*/
    deviceShaken(); 
   //for (value > 0; value < 1; value += value){
    for (value > 0; value < 100; value += value2){
     //value = value + value2;
     textSize(height/40);
     textAlign(CENTER);
     textStyle(NORMAL);
     text(value, width/2, height - height/8);
     text(value2, width/2, height - height/9);
   }
/* 1) function deviceShaken(val){
    val = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    return val;
}*/
}
  
  
// 2)
function deviceShaken(){
    value = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
    value2 = abs(pAccelerationX) + abs(pAccelerationY) + abs(pAccelerationZ);
}
