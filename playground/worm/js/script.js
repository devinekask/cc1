let start;
let step;
let t = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(0);

  start = createVector(width / 2, height / 2);
  step = createVector(random(-5, 5), random(5, 5));
}

function draw() {
  stroke(255);
  fill(0);

  ellipse(start.x, start.y, 10);

  const angle = map(noise(t), 0, 1, -45, 45);

  step.rotate(angle);

  t += 0.1;

  start = start.add(step);

  if (start.x < 0) {
    start.x = width;
  } else if (start.x > width) {
    start.x = 0;
  } else if (start.y < 0) {
    start.y = height;
  } else if (start.y > height) {
    start.y = 0;
  }
}
