function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  const nRows = 10;
  const nColumns = nRows;
  const cellHeight = height / nRows;
  const cellWidth = width / nColumns;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nColumns; column++) {
      drawTruchet(column * cellWidth, row * cellHeight, cellWidth);
    }
  }
}

function drawTruchet(xPos, yPos, tileSize) {
  stroke(255);
  strokeWeight(4);
  noFill();

  // This is our available space
  //rect(xPos, yPos, tileSize, tileSize);

  const tile = Math.floor(random(2));

  if (tile === 0) {
    // Version 1
    arc(xPos, yPos, tileSize, tileSize, 0, HALF_PI);
    arc(xPos + tileSize, yPos + tileSize, tileSize, tileSize, PI, PI + HALF_PI);
  } else if (tile === 1) {
    // Version 2
    arc(xPos, yPos + tileSize, tileSize, tileSize, PI + HALF_PI, 0);
    arc(xPos + tileSize, yPos, tileSize, tileSize, HALF_PI, PI);
  }
}
