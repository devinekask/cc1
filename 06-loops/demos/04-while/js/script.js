function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Draw 5 ellipses;
  let i = 0;
  while (i < 5) {
    ellipse(25 + i * 50, 50, 50);
    i++;
  };

  // As much ellipses as we can
  let x = 50;
  while (x <= width - 50) {
    ellipse(x, height / 2, 50, 50);
    x += 100;
  }
}
