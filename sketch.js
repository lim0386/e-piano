let osc, fft;
let piano;

function setup(){
  createCanvas(640,500);
  
  osc = new p5.Oscillator();
  osc.amp(0);
  osc.start();
  fft = new p5.FFT();
  piano = 440;
  textSize(20);
}

function draw(){
  background(220);
  fill(255);
  for(let i = 0 ; i < 640; i=i+80){
    rect(i , 0, 80, 480);
  }
  fill(0);
  rect(50, 0, 60, 300);
  rect(130, 0, 60, 300);
  rect(290, 0, 60, 300);
  rect(370, 0, 60, 300);
  rect(450, 0, 60, 300);


  
  if (mouseIsPressed === true){
    if(mouseX > 0 && mouseX < 80){
      piano = 261.6256;
      text("도", 0, 500);
    }
    if(mouseX > 80 && mouseX < 160){
      piano = 293.6648;
      text("레", 0, 500);
    }
    if(mouseX > 160 && mouseX < 240){
      piano = 329.6276;
      text("미", 0, 500);
    }
    if(mouseX > 240 && mouseX < 320){
      piano = 349.2282;
      text("파", 0, 500);
    }
    if(mouseX > 320 && mouseX < 400){
      piano = 391.9954;
      text("솔", 0, 500);
    }
    if(mouseX > 400 && mouseX < 480){
      piano = 440;
      text("라", 0, 500);
    }
    if(mouseX > 480 && mouseX < 560){
      piano = 493.8833;
      text("시", 0, 500);
    }
    if(mouseX > 560 && mouseX < 640){
      piano = 523.2511;
      text("도", 0, 500);
    }
    osc.freq(piano);
   startSound(); 
  }

}

function startSound() {
  // osc.start();
  osc.amp(0.5, 0.2);
}

function mouseReleased() {
  osc.amp(0, 0.2);
}