function setup() {
  createCanvas(400, 400);
  background(220);

  //set the color to red
  fill("red");

  // Red circle
  ellipse(width / 2, height / 3, 100, 100);

  // Transparent circle
  noFill();
  ellipse(width / 2, (2 / 3) * height, 100, 100);
}

function draw() {}
