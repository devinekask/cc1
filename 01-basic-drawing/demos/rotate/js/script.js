let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255);
  rectMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 200, 200);
  angle += PI / 300;
}
