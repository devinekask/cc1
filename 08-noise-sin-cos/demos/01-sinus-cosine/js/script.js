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

  console.log(cos(angle));

  // const cosY = 200 + cos(angle) * 100;
  const sinY = 200 + sin(angle) * 100;

  // ellipse(200, cosY, 30, 30);
  ellipse(200, sinY, 30, 30);

  angle += 1;
}
