let x = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0, 10);
  drawBall();
  x += 2;
}

const drawBall = () => {
  push();
  noStroke();
  fill("red");
  translate(x, height / 2);
  ellipse(0, 0, 50, 50);
  pop();
};

