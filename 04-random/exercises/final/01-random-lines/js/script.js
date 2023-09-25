let nLines = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  const margin = 50;

  const x1 = constrain(random(400), margin, width - margin);
  const x2 = constrain(random(400), margin, width - margin);
  const y1 = constrain(random(400), margin, height - margin);
  const y2 = constrain(random(400), margin, height - margin);

  stroke(255);
  line(x1, y1, x2, y2);

  noFill();
  rect(margin, margin, width - 2 * margin, height - 2 * margin);

  if (nLines === 30) {
    noLoop();
  }

  nLines++;
}
