function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSL, 360, 100, 100);
}

function draw() {
  const xPos = noise(frameCount * 0.01) * width;
  const yPos = noise(10 + frameCount * 0.01) * height;

  const radius = map(noise(20 + frameCount * 0.03), 0, 1, 20, 100);

  const h = map(noise(30 + frameCount * 0.01), 0, 1, 200, 360);
  const l = map(noise(40 + frameCount * 0.01), 0, 1, 50, 60);
  const s = map(noise(50 + frameCount * 0.01), 0, 1, 70, 90);

  fill(h, s, l);
  ellipse(xPos, yPos, radius);
}
