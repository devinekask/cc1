let t = 1;
const increment = 0.01;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  const x = width * noise(t);
  const y = height * noise(t + 1);

  const r = 255 * noise(t + 10);
  const g = 255 * noise(t + 15);
  const b = 255 * noise(t + 25);

  const h = 100 * noise(t + 11);

  fill(r, g, b);

  ellipse(x, y, h, h);

  t += increment;
}
