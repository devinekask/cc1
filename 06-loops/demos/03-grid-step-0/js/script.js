function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  const cellSize = 50;
  ellipse(cellSize / 2, cellSize / 2, cellSize, cellSize);
}
