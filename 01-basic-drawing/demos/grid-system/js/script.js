function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(2);
  fill(255);
}

function draw() {
  background(0);

  // Text
  push();
  noStroke();
  text(`(${mouseX},${mouseY})`, 5, 15);
  pop();

  // Lines
  push();
  translate(mouseX, mouseY);
  line(-25, 0, 25, 0);
  line(0, -25, 0, 25);
  pop();
}
