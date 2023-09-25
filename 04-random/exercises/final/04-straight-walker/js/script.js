let xPos = 200;
let yPos = 200;

let prevXpos;
let prevYPos;

const stepSize = 20;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(2);

  prevXpos = xPos;
  prevYPos = yPos;

  // Roll the dice
  const directionChoice = Math.floor(random(0, 4));

  switch (directionChoice) {
    case 0:
      xPos += stepSize;
      break;
    case 1:
      xPos -= stepSize;
      break;
    case 2:
      yPos += stepSize;
      break;
    case 3:
      yPos -= stepSize;
      break;
  }

  xPos = constrain(xPos, 0, width);
  yPos = constrain(yPos, 0, height);

  line(prevXpos, prevYPos, xPos, yPos);
}
