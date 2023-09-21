/* eslint-disable indent */
let xPos = 0;
let yPos = 0;
let stepSize = 10;
let angle = 0;

const path = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  angle += PI / 10000;
  rotate(angle);
  path.push([xPos, yPos]);

  stepSize = random(-50, 50);
  console.log(stepSize);

  const directionChoice = floor(random(4));

  switch (directionChoice) {
    // up
    case 0:
      yPos -= stepSize;
      break;
    // down
    case 1:
      yPos += stepSize;
      break;
    // left
    case 2:
      xPos -= stepSize;
      break;
    // right
    case 3:
      xPos += stepSize;
      break;
    default:
      break;
  }

  xPos = constrain(xPos, (-width * 6) / 10, (width * 6) / 10);
  yPos = constrain(yPos, (-height * 6) / 10, (height * 6) / 10);

  beginShape();
  path.forEach((coordinate) => {
    vertex(coordinate[0], coordinate[1]);
  });
  endShape();
  pop();
}
