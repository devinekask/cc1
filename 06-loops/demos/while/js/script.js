function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  let x = 100;

  while (x <= width - 50) {
    ellipse(x, height / 2, 50, 50);
    x += 100;
  }
}
