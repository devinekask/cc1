function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  strokeWeight(0.5);

  stroke("#FABCAB");
  drawLines(125, 25, 30);

  stroke("#F1C615");
  drawLines(250, 100, 90);
}

function drawLines(xPos, yPos, angle) {
  push();
  translate(xPos, yPos);
  rotate(angle);
  for (let i = 0; i < 125; i++) {
    line(0, i, 250, i);
  }

  pop();
}
