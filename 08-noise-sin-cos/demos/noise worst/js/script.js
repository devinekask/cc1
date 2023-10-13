function setup() {
  createCanvas(400, 400);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(255);
  push();
  noStroke();
  const factor = 0.05;
  const fatParticleSize = 1;
  fill(166, 27, 27);
  circle(200, 200, 300);

  for (let x = 0; x < width; x += fatParticleSize) {
    for (let y = 0; y < height; y += fatParticleSize) {
      if (check_a_point(x, y, 200, 200, 150)) {
        const noiseVal = noise(x * factor, 10 + y * factor, frameCount * 0.01);
        if (noiseVal < 0.3) {
          fill(252, 244, 225);
          circle(x, y, fatParticleSize * 2);
        }
      }
    }
  }
  pop();
}

function check_a_point(xPos, yPos, centerX, centerY, radius) {
  const dist_points = dist(xPos, yPos, centerX, centerY);
  if (dist_points < radius) {
    return true;
  }
  return false;
}
