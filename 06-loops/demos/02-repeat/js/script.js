function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // ellipse(200, 50, 50, 50);
  // ellipse(200, 100, 50, 50);
  // ellipse(200, 150, 50, 50);
  // ellipse(200, 200, 50, 50);
  // ellipse(200, 250, 50, 50);
  // ellipse(200, 300, 50, 50);
  // ellipse(200, 350, 50, 50);

  // ellipse(200, 1 * 50, 50, 50);
  // ellipse(200, 2 * 50, 50, 50);
  // ellipse(200, 3 * 50, 50, 50);
  // ellipse(200, 4 * 50, 50, 50);
  // ellipse(200, 5 * 50, 50, 50);
  // ellipse(200, 6 * 50, 50, 50);
  // ellipse(200, 7 * 50, 50, 50);

  for (let i = 1; i <= 7; i++) {
    ellipse(200, i * 50, 50, 50);
  }
}
