let circleX = 0;
const circleY = 200;
const circleColour = "red";
const circleSize = 100;

let anotherCircleX = 400;
const anotherCircleY = 200;
const anotherCircleColour = "black";
const anotherCircleSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Circle
  fill(circleColour);
  ellipse(circleX, circleY, circleSize);

  // Another circle
  fill(anotherCircleColour);
  ellipse(anotherCircleX, anotherCircleY, anotherCircleSize);

  // Update x
  circleX++;
  anotherCircleX--;
}
