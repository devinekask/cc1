let xPos = 200;
let yPos = 200;

let prevXPos;
let prevYPos;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
}

function draw() {
  const stepSize = 10;

  // Update previous position
  prevXPos = xPos;
  prevYPos = yPos;

  // Create new position
  xPos = xPos + random(-stepSize, stepSize);
  yPos = yPos + random(-stepSize, stepSize);

  // Constrain within canvas
  xPos = constrain(xPos, 0, width);
  yPos = constrain(yPos, 0, height);

  line(prevXPos, prevYPos, xPos, yPos);
}
