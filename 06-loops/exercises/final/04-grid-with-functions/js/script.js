function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawGrid();
}

function drawGrid() {
  const nRows = 10;
  const nColumns = nRows;
  const cellHeight = height / nRows;
  const cellWidth = width / nColumns;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nColumns; column++) {
      push();
      translate(column * cellWidth, row * cellHeight);

      // Don't draw first & last column/row
      if (
        row !== 0 &&
        row !== nRows - 1 &&
        column !== 0 &&
        column !== nColumns - 1
      ) {
        drawDevineLogo(0, 0, cellHeight - 10);
      }
      pop();
    }
  }
}

function drawDevineLogo(xPos, yPos, size) {
  push();
  translate(xPos, yPos);
  fill(255);
  noStroke();
  const rectSize = 0.8 * size;
  rect(0, 0, rectSize, rectSize);
  arc(rectSize, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  fill(0);
  arc(rectSize / 2, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  pop();
}
