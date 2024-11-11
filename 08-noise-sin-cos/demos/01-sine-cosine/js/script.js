let angle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  const sinY = 200 + sin(angle) * 100;

  //const cosY = 200 + cos(angle) * 100;

  ellipse(200, sinY, 100);

  angle += 1;
}
