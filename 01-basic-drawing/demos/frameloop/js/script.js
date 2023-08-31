function setup() {
  createCanvas(500, 500);
  //set the Frameloop to 30 frames per second
  frameRate(30);
}

function draw() {
background(220);
  ellipse(mouseX, mouseY, 100, 100);
}
