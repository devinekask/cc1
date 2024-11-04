function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(2);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(2);
  noFill();

  const nRows = 10;
  const nColumns = nRows;
  const cellHeight = height / nRows;
  const cellWidth = width / nColumns;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nColumns; column++) {
      push();
      translate(column * cellWidth, row * cellHeight);
      drawTruchet(0, 0, cellWidth);
      pop();
    }
  }
}

function drawTruchet(xPos, yPos, tileSize) {
  const tileVersion = Math.floor(random(2)); // decimal number between 0 and 1

  push();
  translate(xPos, yPos);

  if (tileVersion === 0) {
    arc(0, 0, tileSize, tileSize, 0, HALF_PI);
    arc(tileSize, tileSize, tileSize, tileSize, PI, PI + HALF_PI);
  } else if (tileVersion === 1) {
    arc(0, tileSize, tileSize, tileSize, PI + HALF_PI, 0);
    arc(tileSize, 0, tileSize, tileSize, HALF_PI, PI);
  }
  pop();
}
