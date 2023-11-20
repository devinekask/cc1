let arrow;

function setup() {
  createCanvas(400, 400);

  arrow = new Arrow(200, 200, 50);
}

function draw() {
  background(0);

  arrow.run();
}
