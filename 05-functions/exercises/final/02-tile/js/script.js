function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(1);
}

function draw() {
  drawTiles();
}

function drawTiles() {
  background(0);

  // 1 tile,
  //drawTruchet(0, 0, 400);

  // 4 tiles
  drawTruchet(0, 0, 200);
  drawTruchet(200, 0, 200);
  drawTruchet(0, 200, 200);
  drawTruchet(200, 200, 200);

  // draw 16 tiles
  // Too much work... next class we will learn about loops
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
