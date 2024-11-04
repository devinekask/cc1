function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);

  const numberOfColumns = 10;
  const numberOfRows = 10;
  const cellWidth = width / numberOfColumns;
  const cellHeight = height / numberOfRows;

  // loop for each column
  for (let column = 0; column < numberOfColumns; column++) {
    // nested loop for each row
    for (let row = 0; row < numberOfRows; row++) {
      rect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
    }
  }

  // Alternative solution using push(), pop() and translate()
  /*
  for (let column = 0; column < numberOfColumns; column++) {
    for (let row = 0; row < numberOfRows; row++) {
      push();
      translate(column * cellWidth, row * cellHeight);
      rect(0, 0, cellWidth, cellHeight);
      pop();
    }
  }
  */
}
