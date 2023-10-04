const cellSize = 100;
const chance = 0.4;

function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      drawCell(x + cellSize / 2, y + cellSize / 2);
    }
  }
}

function drawCell(x, y) {
  push();
  translate(x, y);
  for (let size = 5; size <= cellSize; size += 5) {
    if (random() < chance) {
      noFill();
      stroke(255);
      rect(0, 0, size, size);
    }
  }
  pop();
}
