var synth1, synth2;
var counter1 = 0;
var counter2 = 0;
var sloop;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(1);
  textAlign(CENTER, CENTER);
  noStroke();
  synth1 = new p5.PolySynth();
  synth2 = new p5.PolySynth();
  sloop = new p5.SoundLoop(mySoundLoop, 1);
  noLoop();
}

function draw() {
  fill(255,100,100);
  rect(0, 0, width/2, height);
  fill(100,100,255);
  rect(width/2, 0, width/2, height);
  
  if (sloop.isPlaying) {
    synth1.play('C4', 0.7, 0, 0.5);
    counter1++;
  }

  fill(0);
  textSize(min(width, height)/20);
  text("Draw loop (Low pitch)", width*1/4, height/10);
  text("SoundLoop (High pitch)", width*3/4, height/10);
  textSize(min(width, height)/5);
  text(counter1, width*1/4, height/2);
  text(counter2, width*3/4, height/2);
}

function mySoundLoop() {
  synth2.play('E4', 0.7, 0, 0.5);
  counter2++;
}