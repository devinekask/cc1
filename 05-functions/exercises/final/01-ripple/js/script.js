let xPos;
let yPos;
let rippleSize = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  drawRipples();
}

function mousePressed() {
  // Clear background
  background(0);

  // Update with current mouse postion
  xPos = mouseX;
  yPos = mouseY;

  // Reset rippleSize
  rippleSize = 10;
}

function drawRipples() {
  if (xPos !== undefined && yPos !== undefined) {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(xPos, yPos, rippleSize);
  }

  // Make ripple bigger
  rippleSize += 20;
}
