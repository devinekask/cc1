let xPos;
let yPos;

function setup() {
  createCanvas(400, 400);
  frameRate(10);

  xPos = random(0, width);
  yPos = random(0, height);
}

function draw() {
  background(0);

  const randomSize = random(0, 100);
  ellipse(xPos, yPos, randomSize);
}
