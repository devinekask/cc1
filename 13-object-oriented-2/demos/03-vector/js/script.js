let position;
let step;

function setup() {
  createCanvas(400, 400);

  frameRate(1);

  position = createVector(10, 10);
  step = createVector(0, 10);
}

function draw() {
  background(0);

  ellipse(position.x, position.y, 10);

  position.x += step.x;
  position.y += step.y;
}
