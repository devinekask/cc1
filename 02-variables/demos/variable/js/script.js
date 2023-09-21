let radius = 1;
const speed = 1.05;

function setup() {
  createCanvas(400, 400);
  background("black");
  noStroke();

  frameRate(60);
}

function draw() {
  //radius = radius + 1;

  radius += speed;

  ellipse(200, 200, radius);
}
