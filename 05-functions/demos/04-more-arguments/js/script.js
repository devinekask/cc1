function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  drawFace(50, 200);
  drawFace(150, 200, true);
  drawFace(250, 200);
  drawFace(350, 200);

  //drawFace(mouseX, mouseY, true);
  //drawFace(random(width), random(height))

  drawDevineLogo(10, 10, 50);
}

function drawFace(x, y, happy = false) {
  push();
  translate(x, y);
  fill("yellow");
  ellipse(0, 0, 75, 75);

  // Eyes
  fill(0);
  ellipse(-10, -10, 10, 20);
  ellipse(10, -10, 10, 20);

  // Mouth
  noFill();

  if (happy) {
    arc(0, 5, 40, 40, 0, PI);
  } else {
    arc(0, 25, 40, 40, PI, 0);
  }
  pop();
}

function drawDevineLogo(xPos, yPos, size) {
  push();
  translate(xPos, yPos);
  fill(0);
  const rectSize = 0.8 * size;
  rect(0, 0, rectSize, rectSize);
  arc(rectSize, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  fill(220);
  arc(rectSize / 2, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  pop();
}
