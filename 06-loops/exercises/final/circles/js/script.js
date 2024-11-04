function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#5DA3D6");

  noFill();
  strokeWeight(1.3);

  for (let i = 0; i < 12; i++) {
    const size = 200 - i * 8;
    ellipse(150 + i * 12, 200, size, size);
  }
}
