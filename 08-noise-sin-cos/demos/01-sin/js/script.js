let angle = 0;
const speed = 1;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  const x = width / 2;

  const yCos = map(cos(angle), -1, 1, 100, 300);
  fill("red");
  ellipse(x, yCos, 30, 30);

  const ySin = map(sin(angle), -1, 1, 100, 300);
  fill("white");
  ellipse(x, ySin, 30, 30);

  angle += speed;

  if (angle >= 360) {
    angle = 0;
  }

  drawGraph();
}

function drawGraph() {
  push();
  translate(350, 350);
  noFill();
  stroke(255);
  ellipse(0, 0, 50);
  line(0, -35, 0, 35);
  line(-35, 0, 35, 0);

  push();
  fill("red");
  stroke("red");
  strokeWeight(2);
  const xPos = map(cos(angle), -1, 1, 25, -25);
  const yPos = map(sin(angle), -1, 1, 25, -25);

  ellipse(xPos, 0, 2);
  line(xPos, yPos, 0, yPos);

  ellipse(0, yPos, 2);
  line(xPos, yPos, xPos, 0);

  rotate(-angle);
  line(0, 0, 25, 0);
  pop();
  pop();
}
