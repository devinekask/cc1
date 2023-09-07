let angle = 0;
let size = 0;
let rectColor = 255;

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255);
}

// TODO make this an exercise

function draw() {
  background(rectColor === 0 ? 255 : 0);
  fill(rectColor);
  translate(width / 2, height / 2);
  rotate(angle);
  angle += PI / 300;
  size += 1.8;
  rectMode(CENTER);
  rect(0, 0, size, size);

  if (size > 550) {
    size = 0;
    rectColor = rectColor === 0 ? 255 : 0;
  }
}
