function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseY);
  noStroke();
  fill(255 - mouseY / 2);
  ellipse(mouseX, mouseY, 50, 50);
}
