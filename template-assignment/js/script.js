let currentScene = 0;
let reference = 0;
let song;

function setup() {
  createCanvas(640, 360);
  // OR
  createCanvas(360, 640);

  background(220);
}

function preload() {
  song = loadSound("./assets/lets-dance.mp3");
}

function draw() {
  currentScene = getCurrentScene();

  switch (currentScene) {
    case 1:
      drawRect(0);
      break;
    case 2:
      drawRect("red");
      break;
    case 3:
      drawRect(255);
      break;
  }

  showTime();
}

function getCurrentScene() {
  const ms = millis();

  // from 0 to 2 seconds
  if (ms - reference <= 2000) {
    return 1;
    // from 2 to 4 seconds
  } else if (ms - reference <= 4000) {
    return 2;
    // from 4 to 6 seconds
  } else if (ms - reference <= 6000) {
    return 3;
  } else {
    reference = ms;
    return 1;
  }
}

function showTime() {
  const ms = millis();
  push();
  stroke(0);
  fill(220);
  noStroke();
  rect(0, 0, 150, 80);
  fill(0);
  text(`Seconds: ${floor(ms / 1000)}`, 10, 30);
  text(`Scene: ${currentScene}`, 10, 50);
  pop();
}

function mouseClicked() {
  song.play();
}

function drawRect(colour) {
  push();
  fill(colour);
  rectMode(CENTER);
  rect(width / 2, height / 2, width / 2);
  pop();
}
