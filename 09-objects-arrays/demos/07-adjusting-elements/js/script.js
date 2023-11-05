function setup() {
  createCanvas(400, 400);
}

function draw() {
  const sizes = [50, 50, 50];

  // Update second element
  sizes[1] = 100;

  ellipse(100, 200, sizes[0]);
  ellipse(200, 200, sizes[1]);
  ellipse(300, 200, sizes[2]);
}
