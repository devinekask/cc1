let i = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  drawBall();
  i++;
}

function drawBall() {
  push();
  noStroke();
  fill(255);
  translate(i, height / 2);
  ellipse(0, 0, 50);
  pop();
}
