let maxSize = 50;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  const eWidth = map(mouseX, 0, width, 10, maxSize);
  const eHeight = map(mouseY, 0, height, 10, maxSize);

  ellipse(200, 200, eWidth, eHeight);

  if (mouseIsPressed) {
    maxSize++;
  }
}
