

function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {

  const nRows = 50;
  const nColumns = nRows;
  const cellHeight = height / nRows;
  const cellWidth = width / nColumns;

  for (let row = 0; row < nRows; row++) {
    for (let column = 0; column < nColumns; column++) {

      const chance = random(0, 4);

      if (chance > 3) {
        fill(0);
      } else {
        fill(255);
      }
      noStroke();
      rect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);

    }
  }
}
