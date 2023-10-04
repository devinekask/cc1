let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  drawLine();
  angle += 10;
}

function drawLine() {
  push();
  translate(height / 2, width / 2);
  rotate(angle);
  stroke(255);
  strokeWeight(2);
  fill(255);
  line(0, -100, 0, 100);
  pop();
};

