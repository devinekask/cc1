function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Why can't we set a background?
  //background(220);
}

function mouseClicked() {
  ellipse(mouseX, mouseY, 100, 100);
}

function keyPressed() {
  console.log(keyCode);
}
