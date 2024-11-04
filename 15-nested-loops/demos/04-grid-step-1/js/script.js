function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);

  const numberOfColumns = 10;
  const cellWidth = width / numberOfColumns;

  for (let column = 0; column < numberOfColumns; column++) {
    rect(column * cellWidth, 0, cellWidth);
  }
}
