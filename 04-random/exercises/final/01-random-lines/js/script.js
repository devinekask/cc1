let nLines = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  noFill();
  rect(50, 50, width - 2 * 50, height - 2 * 50);


  const x1 = constrain(random(400), 50, width - 50);
  const x2 = constrain(random(400), 50, width - 50);
  const y1 = constrain(random(400), 50, height - 50);
  const y2 = constrain(random(400), 50, height - 50);

  stroke(255);
  line(x1, y1, x2, y2);

  if (nLines === 30) {
    noLoop();
  }

  nLines++;
}
