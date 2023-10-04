let currentScene = 0;
let reference = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  currentScene = getCurrentScene();

  switch (currentScene) {
    case 1:
      drawFourSquares("red");
      break;
    case 2:
      drawFourSquares("green");
      break;
    case 3:
      drawFourSquares("blue");
      break;
  }

  showTime();
}

function getCurrentScene() {
  const ms = millis();

  // from 0 untill 4 seconds
  if (ms - reference < 4000) {
    return 1;
    // from 4 untill 8 seconds
  } else if (ms - reference < 8000) {
    return 2;
    // from 8 untill 12 seconds
  } else if (ms - reference < 12000) {
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
  fill(255);
  rect(0, 0, 150, 80);
  fill(0);
  noStroke();
  text(`Reference second: ${floor(reference / 1000)}`, 10, 30);
  text(`Seconds: ${floor(ms / 1000)}`, 10, 50);
  text(`Scene: ${currentScene}`, 10, 70);
  pop();
}

function drawFourSquares(colour) {
  push();
  fill(colour);
  rectMode(CENTER);
  strokeWeight(3);
  rect(height / 2, width / 2, 200, 200);
  rect(height / 2, width / 2, 150, 150);
  rect(height / 2, width / 2, 100, 100);
  rect(height / 2, width / 2, 50, 50);
  pop();
}
