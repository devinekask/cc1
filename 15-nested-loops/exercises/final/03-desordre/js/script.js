const cellSize = 40;

function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      push();
      translate(x, y);
      drawCell(cellSize / 2, cellSize / 2);
      pop();
    }
  }
}

function drawCell(xPos, yPos) {
  push();
  translate(xPos, yPos);

  for (let size = 5; size <= cellSize; size += 5) {
    const randomNumber = random();
    if (randomNumber < 0.4) {
      noFill();
      stroke(255);
      rect(0, 0, size, size);
    }
  }

  pop();
}
