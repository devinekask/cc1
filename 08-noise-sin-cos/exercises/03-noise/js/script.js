let t = 0;

function setup() {
  createCanvas(400, 400);
  stroke(255, 15); // set small alpha value on the stroke for better effect.
  noFill();
  background(0);
  frameRate(30);
}

function draw() {
  const x1 = width * noise(t + 10);
  const y1 = width * noise(t + 20);
  const w = width * noise(t + 30);
  const h = height * noise(t + 40);

  ellipse(x1, y1, w, h);

  t += 0.01;

  //jump in time every 300 frames.
  if (frameCount % 300 === 0) {
    t += 1000;
  }
}
