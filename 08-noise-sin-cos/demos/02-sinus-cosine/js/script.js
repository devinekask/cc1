let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);
}

function draw() {
  background(0);
  drawGraph();
  angle += 1;
}

function drawGraph() {
  push();
  angleMode(DEGREES);
  translate(200, 200);
  noFill();
  stroke(255);

  // Big circle, x-and y axis
  ellipse(0, 0, 200);
  line(0, -200, 0, 200);
  line(-200, 0, 200, 0);

  // Calculating x & y
  // https://p5js.org/reference/#/p5/map
  const xPos = map(cos(angle), -1, 1, -100, 100);
  const yPos = map(sin(angle), -1, 1, 100, -100);

  fill("red");
  stroke("red");
  strokeWeight(2);

  ellipse(xPos, 0, 20);
  line(xPos, yPos, 0, yPos);

  ellipse(0, yPos, 20);
  line(xPos, yPos, xPos, 0);

  ellipse(xPos, yPos, 20);
  line(0, 0, 100, 0);

  noFill();
  arc(0, 0, 50, 50, -angle, 360);

  ellipse(xPos, yPos, 20);
  rotate(-angle);
  line(0, 0, 100, 0);
  pop();
}
