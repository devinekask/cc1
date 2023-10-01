let xPos;
let yPos;
let rippleSize = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  drawRipple();
  rippleSize += 20;
}

function mouseClicked() {
  // Clear background
  background(0);

  // Update with current mouse postion
  xPos = mouseX;
  yPos = mouseY;

  // Reset rippleSize
  rippleSize = 10;
}

function drawRipple() {
  if (xPos !== undefined && yPos !== undefined) {
    noFill();
    stroke(255);
    strokeWeight(5);
    ellipse(xPos, yPos, rippleSize);
  }
}
